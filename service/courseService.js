const { models } = require("../models/definitions");

module.exports = {
  getCourse: async () => {
    const result = await models.course.findAll();
    return result;
  },
  createCourse: async (data) => {
    console.log(data);
    const result = await models.course.create(data);
    return result;
  },
};
