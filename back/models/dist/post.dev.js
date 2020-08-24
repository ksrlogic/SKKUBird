"use strict";

module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    content: {}
  }, {
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci"
  });

  Post.associate = function (db) {};

  return User;
};