const nextButton = document.getElementById('next-button');

const questionAccess = document.getElementById('question');

const answerAccess = document.getElementById('answer-style');

const individualAnswers = document.getElementsByClassName('answer-button');

nextButton.addEventListener('click', nextClicked);

let i = 0

function nextClicked() {
    console.log('You did it!')
    //displayQuestions(inventory)
    displayAnswer(inventory)
 };

// function displayQuestions(inventory) {
//     questionAccess.innerText = inventory[i++].question
// };

function displayAnswer(inventory) {
    individualAnswers.innerText = inventory[i++].answers.choice
};


const inventory = [
    {
        question: 'What is 1 + 1?',
        answers: [
            {choice: '2', boolean: true},
            {choice: '3', boolean: false},
            {choice: '5', boolean: false},
            {choice: '4', booelan: false}
        ]
    },
    {
        question: 'What is 3 + 5?',
        answers: [
            {choice: '2', boolean: false},
            {choice: '7', boolean: false},
            {choice: '8', boolean: true},
            {choice: '-2', booelan: false}
        ]
    },
    {
        question: 'What is 3 + 1?',
        answers: [
            {choice: '6', boolean: false},
            {choice: '4', boolean: true},
            {choice: '2', boolean: false},
            {choice: '5', booelan: false}
        ]
    },
    {
        question: 'What is 2 * 6?',
        answers: [
            {choice: '-4', boolean: false},
            {choice: '8', boolean: false},
            {choice: '4', boolean: false},
            {choice: '12', booelan: true}
        ]
    }
];