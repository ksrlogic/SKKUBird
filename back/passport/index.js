const passport = require("passport");
const local = require("./local.js");
const { User } = require("../models");
module.exports = () => {
  passport.serializeUser((user, done) => {
    done(user.id);
  });
  passport.deserializeUser(async (id, done) => {
    try {
      const user = User.findOne({ where: { id } });
      done(null, user);
    } catch (err) {
      console.error(err);
      done(err);
    }
  });

  local();
};
