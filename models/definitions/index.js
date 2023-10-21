let sequelize = require("../../common/dbConnection");
let user = require("./user/user");
let student = require("./user/student");
let teacher = require("./user/teacher");
let course = require("./user/course");

user.hasOne(student, {
  onDelete: "CASCADE",
  foreignKey: { name: "userId", allowNull: false, unique: true },
});
student.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: { name: "userId", allowNull: false, unique: true },
});

user.hasOne(teacher, {
  onDelete: "CASCADE",
  foreignKey: { name: "userId", allowNull: false, unique: true },
});
teacher.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: { name: "userId", allowNull: false, unique: true },
});

// course.hasMany(teacher, {
//   onDelete: "CASCADE",
//   foreignKey: {
//     name: "courseId",
//     allowNull: false,
//     unique: false,
//     autoIncrement: true,
//   },
// });
// teacher.belongsTo(course, {
//   onDelete: "CASCADE",
//   foreignKey: {
//     name: "courseId",
//     allowNull: false,
//     unique: false,
//     autoIncrement: true,
//   },
// });
teacher.belongsToMany(course, {
  onDelete: "CASCADE",
  through: "TeacherCourse",
  as: "Course",
  foreignKey: { name: "teacherID", allowNull: false },
});

course.belongsToMany(teacher, {
  onDelete: "CASCADE",
  through: "TeacherCourse",
  as: "Teacher",
  foreignKey: { name: "courseID", allowNull: false },
});


const models = sequelize.models;
console.log(models);
const db = {};
db.sequelize = sequelize;
module.exports = { db, models };
