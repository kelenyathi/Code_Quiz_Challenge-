const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Jupiter", "Saturn", "Mars", "Earth"],
    correctAnswer: "Mars"
  },
  {
    question: "What is the tallest mountain in the world?",
    answers: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    correctAnswer: "K2"
  },
  {
    question: "What is the name of the first man to walk on the moon?",
    answers: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins", "Alan Shepard"],
    correctAnswer: "BUZZ"
  },
  {
    question: "What is the largest organ in the human body?",
    answers: ["Skin", "Liver", "Heart", "Lungs"],
    correctAnswer: 0
  }
];

const timePerQuestion = 10; // seconds
let currentQuestionIndex = 0;
let timeRemaining = 0;
let timerInterval;

const startButton = document.getElementById("start-button");
const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const answerButtons = document.getElementById("answer-buttons");
const timeRemainingText = document.getElementById("time-remaining");
const endContainer = document.getElementById("end-container");
const finalScoreText = document.getElementById("final-score");
const initialsInput = document.getElementById("initials");
const saveButton = document.getElementById("save-button");

startButton.addEventListener("click", startQuiz);
// saveButton.addEventListener("click", saveScore);

function startQuiz() {
  startButton.style.display = "none";
  quizContainer.style.display = "block";
  timeRemaining = quizQuestions.length * timePerQuestion;
  starttimer()
  setNextQuestion();
  // timerInterval = setInterval(updateTimer, 1000);
}

let time=100
function starttimer(){
  document.getElementById('time-remaining').innerHTML='empty'
let interval=setInterval(function(){
  if(time>=0){
    time=time-1;
    document.getElementById('time-remaining').innerHTML="time left is"+time
  } else{
    clearInterval(interval)
  }


},1000)
}


function setNextQuestion() {
  resetState();
  showQuestion(quizQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionContainer.innerText = question.question;
  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.addEventListener("click", (event) => { 
event.preventDefault()
let userchoice=event.target.value;
if(userchoice===questions[currentQuestionIndex].answer){
  currentQuestionIndex=currentQuestionIndex+1;
  setNextQuestion()

}else{
  currentQuestionIndex=currentQuestionIndex+1;
  time=time-10
  setNextQuestion()
}
      // if )
    })
  })
}