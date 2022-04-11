const inventory = [
    {
        question: 'What is 1 + 1?',
        answers: [
            {choice: '2', correct: true},
            {choice: '3', correct: false},
            {choice: '5', correct: false},
            {choice: '4', correct: false}
        ]
    },
    {
        question: 'What is 3 + 5?',
        answers: [
            {choice: '2', correct: false},
            {choice: '7', correct: false},
            {choice: '8', correct: true},
            {choice: '-2', correct: false}
        ]
    },
    {
        question: 'What is 3 + 1?',
        answers: [
            {choice: '6', correct: false},
            {choice: '4', correct: true},
            {choice: '2', correct: false},
            {choice: '5', correct: false}
        ]
    },
    {
        question: 'What is 2 * 6?',
        answers: [
            {choice: '-4', correct: false},
            {choice: '8', correct: false},
            {choice: '4', correct: false},
            {choice: '12', correct: true}
        ]
    }
];


const nextButton = document.getElementsByClassName('next-button');

const questionElement = document.getElementsByClassName('question');

const answerButton = document.getElementsByClassName('answer-button');


answerButton[0].addEventListener('click', answersCorrect);

nextButton[0].addEventListener('click', nextClicked);


let i = 0
let j = 0


function nextClicked() {
    console.log('You did it!')
    displayQuestions()
    displayAnswers()
 };


function displayQuestions() {
    questionElement[0].innerText = inventory[i++].question
    // ends game logic
};


function displayAnswers() {
    let currentQuestion
    for (let i = 0; i < inventory.length; i++) {
        if (questionElement[0].innerText === inventory[i].question) {
            currentQuestion = inventory[i]
        }
    }
    for (let j = 0; j < answerButton.length; j++) {
        answerButton[j].innerText = currentQuestion.answers[j].choice
    }
};


function answersCorrect() {
    console.log('answer clicked!')
    // if (inventory[i++].answers[j++].correct[k++] === true) {
    //     console.log('genius!')
    // }
};


// function answerCorrect() {
//     for (let k = 0; k < inventory.answers.correct.length; k++) {
//         //theAnswer = inventory[i].answers[j].choice
//         if (inventory[i].answers[j].correct[k] === true) {
//             console.log('genius!')
//         } else {
//             console.log('try again!')
//         }
//     }
// };



