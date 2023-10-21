const { models } = require("../models/definitions");

module.exports = {
  createCourseTeacher: async (data) => {
    const result = await models.TeacherCourse.create({
      teacherID: data.teacherID,
      courseID: data.courseID,
    });
    return result;
  },
};
