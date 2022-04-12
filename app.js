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


nextButton[0].addEventListener('click', nextClicked);


let i = -1


function nextClicked() {
    // console.log('You did it!')
    if (i === 4) {
        console.log('no longer click')
        return;
    }
    i++
    console.log(i)
    if (i < 4) {
        displayQuestions()
        displayAnswers()
    } else if (i === 4) {
        console.log('this works!')
        let winMessage = document.createElement('p')
        winMessage.innerText = 'game over'
        document.body.append(winMessage)
    }
    // displayQuestions()
    // displayAnswers()
 };


function displayQuestions() {
    questionElement[0].innerText = inventory[i].question
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
        answerButton[j].addEventListener('click', answerCorrect)
    }
};


function answerCorrect(e) {
    let correct = false
    for (let k = 0; k < inventory[i].answers.length; k++) {
        answerButton[k].removeEventListener('click', answerCorrect)
        const theAnswer = inventory[i].answers[k].choice
        const yourAnswer = e.target.innerText
        // console.log(inventory[i].answers[k].correct)
        // console.log(yourAnswer)
        if (inventory[i].answers[k].correct === true && (theAnswer === yourAnswer)) {
            correct = true
        }
    }
    if (correct === true) {
        console.log('genius!')
    } else {
        console.log('try again')
    }
};



