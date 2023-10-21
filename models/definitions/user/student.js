const DataTypes = require("sequelize");
let sequelize = require("../../../common/dbConnection");

const user = sequelize.define(
  "student",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    rollNumber: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
    },

    department: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    semester: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "student",
  }
);
module.exports = user;
