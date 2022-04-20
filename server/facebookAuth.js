// const passport = require("passport");
// const FacebookStrategy = require( 'passport-facebook').Strategy;
// const access_tokens = require('./secretTokens');

// passport.use(new FacebookStrategy({
//   clientID: access_tokens.facebookAppId,
//   clientSecret: access_tokens.facebookAppSecret,
//   callbackURL: "http://localhost:3000/auth/facebook/callback"
// },
// function(accessToken, refreshToken, profile, cb) {
//   User.findOrCreate({ facebookId: profile.id }, function (err, user) {
//     return cb(err, user);
//   });
// }
// ));