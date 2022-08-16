let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Tim Berners-Lee",
        "answer_2": "Lady Gaga",
        "answer_3": "Jeff Bezos",
        "answer_4": "Bill Gates",
    },
    {
        "question": "Wann hat die Französische Revolution stattgefunden?",
        "answer_1": "1914",
        "answer_2": "1945",
        "answer_3": "1492",
        "answer_4": "1789",
    },
    {
        "question": "Wer ist der Erfinder der Glühbirne?",
        "answer_1": "Christopher Kolumbus",
        "answer_2": "Alfred Nobel",
        "answer_3": "Thomas Edison",
        "answer_4": "Isaac Newton",
    },
    {
        "question": "Wo hat die Fußball WM 2010 stattgefunden?",
        "answer_1": "Deutschland",
        "answer_2": "Südafrika",
        "answer_3": "Brasilien",
        "answer_4": "Frankreich",
    },
]

let currentQuestion = 0;

function init () {
     let allQuestions = document.getElementById('all-questions');
     allQuestions.innerHTML = /*html*/ `${questions.length}`;
     showQuestion()
}


function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question-text').innerHTML = question["question"];
    document.getElementById('answer1').innerHTML = question["answer_1"];
    document.getElementById('answer2').innerHTML = question["answer_2"];
    document.getElementById('answer3').innerHTML = question["answer_3"];
    document.getElementById('answer4').innerHTML = question["answer_4"];
}