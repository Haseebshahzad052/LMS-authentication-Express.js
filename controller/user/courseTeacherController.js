const courseTeacherService = require("../../service/courseTeacherService");

module.exports = {
  createCourseTeacher: async (req, res) => {
    const result = await courseTeacherService.createCourseTeacher(req.body);
    res.json(result);
  },
};
