const Student = require("../models/student");

exports.getStudentsList = (req, res, next) => {
      Student.fetchAll(students => {
            res.render('students/students-list', {
                  students: students
            });
      });      
};

exports.getAddNewStudent = (req, res, next) => {
      res.render('students/add-student');
}


exports.postAddNewStudent = (req, res, next) => {
      const fullname = req.body.fullname;
      const stdnum = req.body.stdnum;
      const grade = req.body.grade;

      newStudent = new Student(fullname, stdnum, grade);
      newStudent.save();
      res.redirect('/students');
}