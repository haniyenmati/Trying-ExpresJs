const path = require('path');
const dataPath = path.join(path.dirname(process.mainModule.filename), 'data', 'students.json');
const fs = require('fs');

const getStudentsFromFile = (callback) => {
      fs.readFile(dataPath, (err, data)=>{
            if(err)
                  callback([]);
            else
                  callback(JSON.parse(data));
      })
};

module.exports = class Student{
      constructor(fullname, stdnum, grade){
            this.fullname = fullname;
            this.stdnum = stdnum;
            this.grade = grade;
      }

      save(){
            // students.push(this); //first way of doing it.
            getStudentsFromFile((students)=>{
                  students.push(this);
                  fs.writeFile(dataPath, JSON.stringify(students), (err)=>{
                        console.log(err);
                  });
            });

            return this;
      }

      static fetchAll(callback){
            getStudentsFromFile(callback);
      }
};