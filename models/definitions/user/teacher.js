const DataTypes = require("sequelize");
let sequelize = require("../../../common/dbConnection");

const user = sequelize.define(
  "teacher",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    scale: {
      unique: false,
      allowNull: false,
      type: DataTypes.STRING,
    },

    department: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "teacher",
  }
);
module.exports = user;
