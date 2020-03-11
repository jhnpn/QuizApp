// global variables
var begin = $(".begin");
var next = $(".next");
var questionContainer = $("#question-container");
var questionElement = $("#question");
var answerButtons = $("#answer-buttons");

// variables that will be needed for shuffling the order of questions
let shuffledQuestions, currentQuestionIndex

$(".begin").on("click", beginQuiz) //clicking on this will start the quiz

// we need a function that will bring up the questions and answers after clicking the begin button
function beginQuiz() {
    $(".begin").addClass("hide");
    $("#question-container").removeClass("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

// change text to actually show the question we want
function showQuestion(question) {
    $("#question").text(question.question);
    question.answers.forEach(answer => {
        const button = $(document.createElement("button"))
        $("button").text(answer.text);
        $("button").addClass("btn");
        if (answer.correct) {
            $("button").data(answer.correct)
        }
        $("button").on("click", selectAnswer);
        $("#answer-buttons").append($("button"));
    })
}

function resetState() {
    $(".next").addCleass("hide");
}

function selectAnswer(e) {

}

// questions needed for the quiz
const questions = [
    {
        question: "Which of these are not part of the web development language?",
        answers: [
            {text: "HTML", correct: false},
            {text: "CSS", correct: false},
            {text: "JavaScript", correct: false},
            {text: "SSI", correct: true},
        ]
    },
    {
        question: "Which of these creates a break in a paragraph with a horizontal line?",
        answers: [
            {text: "<br />", correct: false},
            {text: "<hb />", correct: false},
            {text: "<hr />", correct: true},
            {text: "<p>", correct: false},
        ]
    },
    {
        question: "How can we change the color of a text in css?",
        answers: [
            {text: "word-color:", correct: false},
            {text: "text-color:", correct: false},
            {text: "color:", correct: true},
            {text: "change-text-color:", correct: false},
        ]
    },
    {
        question: "font-family is what changes the text font.",
        answers: [
            {text: "true", correct: true},
            {text: "false", correct: false},
        ]
    },
    {
        question: "What is used to insert a clickable link into our html?",
        answers: [
            {text: "<a>", correct: true},
            {text: "<link>", correct: false},
            {text: "<https>", correct: false},
            {text: "<href>", correct: false},
        ]
    },
    {
        question: "Breaks are not necessary when coding.",
        answers: [
            {text: "true", correct: false},
            {text: "false", correct: true},
        ]
    },
    {
        question: "What do we call the method that will repeat the same function as many times as possible?",
        answers: [
            {text: "repeat", correct: false},
            {text: "for loops", correct: true},
            {text: "rewind", correct: false},
            {text: "replay", correct: false},
        ]
    },
    {
        question: "What do we use to sort numbers and/or strings into an array?",
        answers: [
            {text: "()", correct: false},
            {text: "[]", correct: true},
            {text: "{}", correct: false},
            {text: "<>", correct: false},
        ]
    },
    {
        question: "What is the principle that triggers an event from the child element up to the other elements",
        answers: [
            {text: "capturing", correct: false},
            {text: "trickling", correct: false},
            {text: "elevate", correct: false},
            {text: "bubbling", correct: true},
        ]
    },
    {
        question: "Math.random is used to pull anything in a randomized order.",
        answers: [
            {text: "true", correct: true},
            {text: "false", correct: false},
        ]
    }
]