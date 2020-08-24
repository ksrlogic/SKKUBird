"use strict";

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: {},
    nickname: {},
    password: {}
  }, {
    charset: "utf8",
    collate: "utf8_general_ci"
  });

  User.associate = function (db) {};

  return User;
};