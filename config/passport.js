const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const mongoose = require("mongoose");
const Guide = mongoose.model("guides");
const Guest = mongoose.model("guests");
const keys = require("../config/keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      if (jwt_payload.status === "guide") {
        Guide.findById(jwt_payload.id)
          .then(guide => {
            if (guide) {
              return done(null, guide);
            }
            return done(null, false);
          })
          .catch(err => console.log(err));
      } else if (jwt_payload.status === "guest") {
        Guest.findById(jwt_payload.id)
          .then(guest => {
            if (guest) {
              return done(null, guest);
            }
            return done(null, false);
          })
          .catch(err => console.log(err));
      }
    })
  );
};
