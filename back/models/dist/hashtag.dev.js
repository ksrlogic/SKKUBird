"use strict";

module.exports = function (sequelize, DataTypes) {
  var Hashtag = sequelize.define("Hashtag", {
    content: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci"
  });

  Hashtag.associate = function (db) {
    db.Hashtag.belongsToMany(db.Post, {
      through: "PostHashtag"
    });
  };

  return Hashtag;
};