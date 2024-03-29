const mongoose = require('mongoose');


const quizSchema = new mongoose.Schema({
  name: String,
  studentID: String,
});


const Quiz = mongoose.model('w24students', quizSchema);


function insertQuizData(name, studentID) {
  
  const newQuiz = new Quiz({
    name: name,
    studentID: studentID,
  });
  return newQuiz.save();
}

module.exports = { Quiz, insertQuizData };