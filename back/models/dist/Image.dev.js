"use strict";

module.exports = function (sequelize, DataTypes) {
  var Image = sequelize.define("Image", {
    src: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    charset: "utf8",
    collate: "utf8_general_ci"
  });

  Image.associate = function (db) {
    db.Image.belongsTo(db.Post);
  };

  return Image;
};