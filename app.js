const inventory = [
    {
        question: 'Rocks:',
        answers: [
            {choice: 'are soft until you touch them', correct: false},
            {choice: 'move like water until you look at them', correct: false},
            {choice: 'are fake', correct: false},
            {choice: 'all of the above', correct: true}
        ]
    },
    {
        question: 'Cupcakes without icing are just muffins',
        answers: [
            {choice: 'Icing is the bane of my existence', correct: true},
            {choice: 'True', correct: false},
            {choice: 'There is only one right answer and it is the first option', correct: false},
            {choice: 'If you picked "true", you are wrong', correct: false}
        ]
    },
    {
        question: 'Crystals have healing powers',
        answers: [
            {choice: 'No.', correct: true},
            {choice: 'Crystal gays have the same energy as IPA heteros', correct: true},
            {choice: 'All quartz is SiO2. Trace minerals dont make a difference', correct: true},
            {choice: 'Again, no.', correct: true}
        ]
    },
    {
        question: 'What is the only number that does not have its roman numeral?',
        answers: [
            {choice: '73', correct: false},
            {choice: '21', correct: false},
            {choice: '100,010,200', correct: false},
            {choice: '0 -- this is the right answer. Fun fact: 0 didnt always exist. When counting first started coming around, you just had no quantity of something in which why mention, one of something, or many of something', correct: true}
        ]
    }
];


const nextButton = document.getElementsByClassName('next-button');

const questionElement = document.getElementsByClassName('question');

const answerButton = document.getElementsByClassName('answer-button');


nextButton[0].addEventListener('click', nextClicked);


let i = -1


function nextClicked() {
    if (i === 4) {
        return;
    }
    i++
    if (i < 4) {
        displayQuestions()
        displayAnswers()
    } else if (i === 4) {
        let winMessage = document.createElement('p')
        winMessage.innerText = 'game over'
        document.body.append(winMessage)
    }
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
        if (inventory[i].answers[k].correct === true && (theAnswer === yourAnswer)) {
            correct = true
        }
    }
    if (correct === true) {
        let rightAnswer = document.createElement('p')
        rightAnswer.innerText = 'Correct!'
        document.body.append(rightAnswer)
    } else {
        let wrongAnswer = document.createElement('p')
        wrongAnswer.innerText = 'Sorry, try next question'
        document.body.append(wrongAnswer)
    }
};



