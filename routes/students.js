const express = require('express');
const studentsController = require('../controller/students');

const router = express.Router();

// get a list of students
router.get('/', studentsController.getStudentsList);


// get request of add a new student to the list
router.get('/add-student', studentsController.getAddNewStudent);

// post request of add a new student to the list
router.post('/add-student', studentsController.postAddNewStudent);

module.exports = router;