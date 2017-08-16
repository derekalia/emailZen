//creates all the setup to connect with node and the route handlers
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');


passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientId,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
      },
      (accessToken, refreshToken, profile, done) => {
        console.log('access token ',accessToken);
        console.log('refresh Token ',refreshToken);
        console.log('profile ',profile);
      }
    )
  );

  