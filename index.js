const express = require('express');
const keys = require('./config/keys');
const mongoose = require('mongoose')
const cookieSession = require('cookie-session');
const passport = require('passport');
var bodyParser = require('body-parser')
require('./models/User')
require('./services/passport')

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json())

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
)

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)

if(process.env.NODE_ENV === 'production'){
  //make express serve up prod assets
  app.use(express.static('client/build'))

  //expess will serve up the index.html file if it doenst recognice the route
  const path = require('path')
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, "client", 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
