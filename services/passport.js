//creates all the setup to connect with node and the route handlers
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user,done)=>{
  done(null,user.id);
})

passport.deserializeUser((id,done)=>{
 User.findById(id)
 .then(user=>{
   done(null,user)
 })
});

passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientId,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
      },
      (accessToken, refreshToken, profile, done) => {        
        User.findOne({googleId:profile.id  }) //if null then create new users 
          .then((existingUser) => {
            if(existingUser){
              done(null,existingUser);
            }else{
              new User({googleId:profile.id}).save() //must use save, to save it the database
              .then(user=>{
                done(null,user);
              })
            }
          });
      }
    )
  );

  