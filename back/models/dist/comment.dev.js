"use strict";

module.exports = function (sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci"
  });

  Comment.associate = function (db) {
    db.Comment.belongsTo(db.User);
    db.Comment.belongsTo(db.Post);
  }; // For Relational Database


  return Comment;
};