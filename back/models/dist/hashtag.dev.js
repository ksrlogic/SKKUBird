"use strict";

module.exports = function (sequelize, DataTypes) {
  var HashTag = sequelize.define("HashTag", {
    content: {}
  }, {
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci"
  });

  HashTag.associate = function (db) {};

  return User;
};