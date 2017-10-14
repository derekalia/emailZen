const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireLogin = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/EmailTemplates/surveyTemplate');

const Surveys = mongoose.model('surveys');

module.exports = app => {
  app.get('/api/surveys/thanks', (req, res) => {
      res.send('thanks for clicking!')
  });

  app.post('api/surveys', requireLogin, requireLogin, async (res, req) => {
    const { subject, title, body, recipents } = req.body;
    const survey = new Surveys({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });
    // greate place to send email
    const mailer = new Mailer(survey, surveyTemplate(survey));
    mailer.send();

    try {
        await mailer.send();
        await survey.save();
        req.user.credits -= 1;
        const user = await req.user.save();
  
        res.send(user);
      } catch (err) {
        res.status(422).send(err);
      }
  });
};
