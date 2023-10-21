const config = require("../config");
const { Sequelize } = require("sequelize");

var database = new Sequelize(config.db);
database
  .authenticate()
  .then(() => {
    console.log("database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = database;
