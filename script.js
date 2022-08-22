let html = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Tim Berners-Lee",
        "answer_2": "Lady Gaga",
        "answer_3": "Jeff Bezos",
        "answer_4": "Bill Gates",
        "correct": 1,
    },
    {
        "question": "Wann hat die Französische Revolution stattgefunden?",
        "answer_1": "1914",
        "answer_2": "1945",
        "answer_3": "1492",
        "answer_4": "1789",
        "correct": 4,
    },
    {
        "question": "Wer ist der Erfinder der Glühbirne?",
        "answer_1": "Christopher Kolumbus",
        "answer_2": "Alfred Nobel",
        "answer_3": "Thomas Edison",
        "answer_4": "Isaac Newton",
        "correct": 3,
    },
    {
        "question": "Wo hat die Fußball WM 2010 stattgefunden?",
        "answer_1": "Deutschland",
        "answer_2": "Südafrika",
        "answer_3": "Brasilien",
        "answer_4": "Frankreich",
        "correct": 2
    },
]

let css = [
    {
        "question": "Wer ist der Erfinder der Glühbirne?",
        "answer_1": "Christopher Kolumbus",
        "answer_2": "Alfred Nobel",
        "answer_3": "Thomas Edison",
        "answer_4": "Isaac Newton",
        "correct": 3,
    },
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Tim Berners-Lee",
        "answer_2": "Lady Gaga",
        "answer_3": "Jeff Bezos",
        "answer_4": "Bill Gates",
        "correct": 1,
    },
    {
        "question": "Wann hat die Französische Revolution stattgefunden?",
        "answer_1": "1914",
        "answer_2": "1945",
        "answer_3": "1492",
        "answer_4": "1789",
        "correct": 4,
    },
    {
        "question": "Wo hat die Fußball WM 2010 stattgefunden?",
        "answer_1": "Deutschland",
        "answer_2": "Südafrika",
        "answer_3": "Brasilien",
        "answer_4": "Frankreich",
        "correct": 2
    },
]

let js = [
    {
        "question": "Wo hat die Fußball WM 2010 stattgefunden?",
        "answer_1": "Deutschland",
        "answer_2": "Südafrika",
        "answer_3": "Brasilien",
        "answer_4": "Frankreich",
        "correct": 2,
    },
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Tim Berners-Lee",
        "answer_2": "Lady Gaga",
        "answer_3": "Jeff Bezos",
        "answer_4": "Bill Gates",
        "correct": 1,
    },
    {
        "question": "Wann hat die Französische Revolution stattgefunden?",
        "answer_1": "1914",
        "answer_2": "1945",
        "answer_3": "1492",
        "answer_4": "1789",
        "correct": 4,
    },
    {
        "question": "Wer ist der Erfinder der Glühbirne?",
        "answer_1": "Christopher Kolumbus",
        "answer_2": "Alfred Nobel",
        "answer_3": "Thomas Edison",
        "answer_4": "Isaac Newton",
        "correct": 3,
    },
]

let java = [
    {
        "question": "Wann hat die Französische Revolution stattgefunden?",
        "answer_1": "1914",
        "answer_2": "1945",
        "answer_3": "1492",
        "answer_4": "1789",
        "correct": 4,
    },
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Tim Berners-Lee",
        "answer_2": "Lady Gaga",
        "answer_3": "Jeff Bezos",
        "answer_4": "Bill Gates",
        "correct": 1,
    },
    {
        "question": "Wer ist der Erfinder der Glühbirne?",
        "answer_1": "Christopher Kolumbus",
        "answer_2": "Alfred Nobel",
        "answer_3": "Thomas Edison",
        "answer_4": "Isaac Newton",
        "correct": 3,
    },
    {
        "question": "Wo hat die Fußball WM 2010 stattgefunden?",
        "answer_1": "Deutschland",
        "answer_2": "Südafrika",
        "answer_3": "Brasilien",
        "answer_4": "Frankreich",
        "correct": 2
    },
]


let currentCategory = html;

let currentQuestion = 0;
let amountOfRightQuestions = 0;
//Array to show which Questions were answered correctly
let identificationOfRightQuestions = [];

let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/wrong.mp3');

function init () {
     renderStartScreen('HTML');
}


function renderStartScreen(categoryString) {
    document.getElementById('progress-bar').style.width = '0%';
    document.getElementById('startscreen').innerHTML = /*html*/ `
        <div>
            <h5>Welcome to the awesome <span>${categoryString}</span> QUIZ</h5>
            <p>Ready for a Challenge?</p>
        </div>
        <div class="start-button-container">
            <button onclick="startGame()" class="start-button"><span>START NOW</span><img src="img/arrow-white.png"></button>
        </div>
    `;
}


function startGame() {
    document.getElementById('startscreen').style = 'display: none';
    document.getElementById('question-body').style = '';
    let allQuestions = document.getElementById('all-questions');
    allQuestions.innerHTML = /*html*/ `${currentCategory.length}`;
    showQuestion()
}


function showQuestion() {
    if (gameIsOver()) {
        showEndscreen();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }
}


function gameIsOver() {
    return currentQuestion >= currentCategory.length;
}


function showEndscreen() {
    renderEndScreen();
    document.getElementById('endscreen').style = '';
    document.getElementById('question-body').style = 'display: none'
}


function renderEndScreen() {
    pointsContainer = document.getElementById('score-points');
    pointsContainer.innerHTML = /*html*/ `
        <b>${amountOfRightQuestions}/${currentCategory.length}</b>
        `;
}


function share() {
    alert('Funktion noch nicht implementiert')
}


function restartGame() {
    document.getElementById('endscreen').style = 'display: none';
    document.getElementById('question-body').style = ''
    currentQuestion = 0;
    amountOfRightQuestions = 0;
    identificationOfRightQuestions = [];
    showQuestion();
}


function updateProgressBar() {
    let percent = (currentQuestion + 1) / currentCategory.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').style.width = `${percent}%`;
}


function updateToNextQuestion() {
    let question = currentCategory[currentQuestion];

    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('question-text').innerHTML = question["question"];
    document.getElementById('answer_1').innerHTML = question["answer_1"];
    document.getElementById('answer_2').innerHTML = question["answer_2"];
    document.getElementById('answer_3').innerHTML = question["answer_3"];
    document.getElementById('answer_4').innerHTML = question["answer_4"];
}


function answer(selection) {
    let question = currentCategory[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let answer = document.getElementById(selection).parentNode;
    let idOfRightAnswer = 'answer_' + question['correct'];
    if (rightAnswerSelected(selectedQuestionNumber, question)){
        correctAnswer(answer);
    } else {
        falseAnswer(answer, idOfRightAnswer)
    }
    document.getElementById('next-button').disabled = false;
}


function rightAnswerSelected(selectedQuestionNumber, question) {
    return selectedQuestionNumber == question['correct'];
}


function correctAnswer(answer) {
    answer.classList.add('bg-success');
    increaseRightQuestionCounter();
    
    //ensure that the old Audio isn't running anymore
    AUDIO_SUCCESS.currentTime = 0 
    AUDIO_SUCCESS.play();
}


function increaseRightQuestionCounter() {
    amountOfRightQuestions++;
    //To know which Question was answered correct
    identificationOfRightQuestions.push(currentQuestion);
}


function falseAnswer(answer, idOfRightAnswer) {
    answer.classList.add('bg-danger')
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    //ensure that the old Audio isn't running anymore
    AUDIO_FAIL.currentTime = 0 
    AUDIO_FAIL.play();
}


function nextQuestion() {
    currentQuestion++;
    document.getElementById('last-button').disabled = false;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}


function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}


function lastQuestion() {
    //decreaseAmountOfRightQuestions is needed twice 
    //could be that the currentquestion before clicking the button is already answered correctly
    //and the currentquestion after clicking is has also been correct.
    //So two correct Answers need to be deleted
    decreaseAmountOfRightQuestions();
    currentQuestion--;
    decreaseAmountOfRightQuestions();
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons()
    showQuestion();
    if (currentQuestion == 0) {
        document.getElementById('last-button').disabled = true;
    }
}


function decreaseAmountOfRightQuestions() {
    let indexCurrentQuestion = identificationOfRightQuestions.indexOf(currentQuestion);
    //if currentquestion was aready answered correct
    if (indexCurrentQuestion >= 0) {
        //the amountOfRightQuestions needs to be decreased
        amountOfRightQuestions--;
        //the currentQuestion needs to be deleted in the identificationOfRightQuestions Array
        identificationOfRightQuestions.splice(indexCurrentQuestion, 1)
    }
}


function selectQuizCategory(buttonId, categoryName, categoryString) {
    currentQuestion = 0;
    amountOfRightQuestions = 0;
    identificationOfRightQuestions = [];
    showStartScreen();
    currentCategory = categoryName;
    changeButtonBorder(buttonId);
    renderStartScreen(categoryString); 
}


function showStartScreen() {
    document.getElementById('question-body').style = 'display: none';
    document.getElementById('endscreen').style = 'display: none';
    document.getElementById('startscreen').style = '';
}


function changeButtonBorder(buttonId) {
    resetAllBorders();
    document.getElementById(buttonId).style = 'border-left: 5px solid rgb(255, 255, 255) !important;'
}


function resetAllBorders() {
    document.getElementById('html-button').style = '';
    document.getElementById('css-button').style = '';
    document.getElementById('js-button').style = '';
    document.getElementById('java-button').style = '';
}












