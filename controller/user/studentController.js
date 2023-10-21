const studentService = require("../../service/studentService");
const userService = require("../../service/userService");
const userController = require("./userController");

module.exports = {
  getStudent: async (req, res) => {
    const data = await studentService.getStudent();
    res.send(data);
  },
  createStudent: async (req, res) => {
    const { firstname, lastname, email, phoneNumber, ...Student } = req.body;
    // console.log({
    //   firstname: fistname,
    //   lastname: lastname,
    //   email: email,
    //   phoneNumber: phoneNumber,
    // });
    const creteUser = await userController.createUserhelper({
      firstname: firstname,
      lastname: lastname,
      email: email,
      phoneNumber: phoneNumber,
    });
    const creatStudent = await studentService.createStudent({
      userId: creteUser.id,
      rollNumber: Student.rollNumber,
      department: Student.department,
      semester: Student.semester,
    });

    res.send(creatStudent);
  },
};
