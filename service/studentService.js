const { models } = require("../models/definitions");

module.exports = {
  getStudent: async () => {
    const result = await models.student.findAll();
    return result;
  },
  createStudent: async (data) => {
    console.log(data);
    const result = await models.student.create(data);
    return result;
  },
};
