"use strict";

module.exports = function (sequelize, DataTypes) {
  var Image = sequelize.define("Image", {
    src: {}
  }, {
    charset: "utf8",
    collate: "utf8_general_ci"
  });

  Image.associate = function (db) {};

  return User;
};