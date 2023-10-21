const { models } = require("../models/definitions");

module.exports = {
  getTeacher: async () => {
    const result = await models.teacher.findAll();
    return result;
  },
  createTeacher: async (data) => {
    console.log(data);
    const result = await models.teacher.create(data);
    return result;
  },
};
