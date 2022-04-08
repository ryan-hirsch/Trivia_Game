const nextButton = document.getElementById('next-button');

const questionAccess = document.getElementById('question');

const answerAccess = document.getElementById('answer-buttons');

nextButton.addEventListener('click', nextClicked);

function nextClicked() {
    console.log('You did it!')
    displayQuestions(inventory)
 };

function displayQuestions(inventory) {
    questionAccess.innerText = inventory
};



const inventory = [
    {
        question: 'What is 1 + 1?',
        answers: [
            {choice: '2', boolean: true},
            {choice: '3', boolean: false},
            {choice: '5', boolean: false},
            {choice: '4', booelan: true}
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