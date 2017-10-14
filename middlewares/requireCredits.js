module.exports = (req, res, next) => {
    //get credits
    console.log(req.user)    
    if (req.user.credits < 1) {
      return res.status(403).send({ error: 'You dont have enought credits' });
    }
    next();
  };
  