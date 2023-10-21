const studentService = require("../../service/studentService");
const courseService = require("../../service/courseService");

module.exports = {
  getCourse: async (req, res) => {
    const data = await courseService.getCourse();
    res.send(data);
  },
  createCourse: async (req, res) => {
    const data = await courseService.createCourse(req.body);
    res.send(data);
  },
};
