const DataTypes = require("sequelize");
let sequelize = require("../../../common/dbConnection");

const user = sequelize.define(
  "course",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    coursename: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    courseCreditHours: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "course",
  }
);
module.exports = user;
