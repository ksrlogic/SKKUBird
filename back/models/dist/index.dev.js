"use strict";

var Sequelize = require("sequelize");

var env = process.env.NODE_ENV || "development";

var config = require("../confing/config")[env];

var db = {};
var sequelize = new Sequelize(config.database, config.username, config.password, config);
Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;