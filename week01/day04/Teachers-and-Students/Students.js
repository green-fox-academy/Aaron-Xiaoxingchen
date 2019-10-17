const teacher = require('./Teachers');
// learn() -> prints the student is learning something new
// question(teacher) -> calls the teachers answer method
class Student{
   learn(){
       console.log('the student is learning something new');
   }
    question(teacher){
        teacher.answer();
    }
}

module.exports = Student;