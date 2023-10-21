var express = require("express");
const userController = require("../controller/user/userController");
const studentController = require("../controller/user/studentController");

const courseController = require('../controller/user/courseController');
const courseTeacherController = require('../controller/user/courseTeacherController');
const teacherController = require("../controller/user/teacherController");
const authController = require("../controller/user/common/authenticationController")
var router = express.Router();

/* GET users listing. */
router.get("/", userController.getUser);
router.post("/createUser", userController.createUser);

router.get("/students", studentController.getStudent);
router.post("/createStudent", studentController.createStudent);


router.get("/teacher", teacherController.getTeacher);
router.post("/createTeacher", teacherController.createTeacher);

router.get('/course',courseController.getCourse)
router.post('/createCourse',courseController.createCourse);


router.post("/course_teacher", courseTeacherController.createCourseTeacher);

router.post("/login", authController.login );

module.exports = router;
