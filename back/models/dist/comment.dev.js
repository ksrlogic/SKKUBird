"use strict";

module.exports = function (sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    content: {}
  }, {
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci"
  });

  Comment.associate = function (db) {};

  return User;
};