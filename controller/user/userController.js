const studentService = require("../../service/studentService");
const userService = require("../../service/userService");

module.exports = {
  getUser: async (req, res) => {
    const data = await userService.getUsers();
    res.send(data);
  },
  createUser: async (req, res) => {
    const data = await userService.createUser(req.body);
    res.send(data);
  },
  createUserhelper: async (data) => {
    const studentdata = await userService.createUser(data);
    return studentdata;
  },
};
