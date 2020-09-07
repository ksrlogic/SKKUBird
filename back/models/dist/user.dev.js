"use strict";

var sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING(30),
      // TEXT BOOLEAN INTEGER FLOAT
      allowNull: false,
      unique: true
    },
    nickname: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    charset: "utf8",
    collate: "utf8_general_ci"
  });

  User.associate = function (db) {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, {
      through: "Like",
      as: "Liked"
    });
    db.User.belongsToMany(db.Post, {
      through: "Follow",
      as: "Followers",
      foreignKey: "FollowingId"
    });
    db.User.belongsToMany(db.Post, {
      through: "Follow",
      as: "Followings",
      foreignKey: "FollowerId"
    });
  };

  return User;
};