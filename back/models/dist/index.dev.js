"use strict";

var Sequelize = require("sequelize");

var env = process.env.NODE_ENV || "development";

var config = require("../config/config")[env];

var db = {};
var sequelize = new Sequelize(config.database, config.username, config.password, config);
db.Comment = require("./comment")(sequelize, Sequelize);
db.Post = require("./post")(sequelize, Sequelize);
db.Image = require("./image")(sequelize, Sequelize);
db.User = require("./user")(sequelize, Sequelize);
db.Hashtag = require("./hashtag")(sequelize, Sequelize);
Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;