let scienceURL = "https://my-little-cors-proxy.herokuapp.com/https://opentdb.com/api.php?amount=1&category=17&difficulty=easy&type=multiple";

let data = [];
let answers = [];

function getData(url){
    fetch(url)

        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(accumulateData)
        .then(shuffle)
        .then(randomAssign)
}


function accumulateData(grabData) {
    answers = []
    console.log(grabData.results[0]);
    let infoData = grabData.results[0];
    incorrect = [...infoData.incorrect_answers];
    incorrect.push(infoData.correct_answer);
    answers = [...incorrect];
    drawQuestionsToPage(infoData);
    console.log(answers)
    return [...answers]
}

function drawQuestionsToPage(grabQuestion) {
    let questionDiv = document.querySelector('[data-question]');
    questionDiv.textContent='';
    const questionBoxDiv = document.createElement('div');

    questionBoxDiv.textContent= `Question: ${grabQuestion.question}`;
    questionDiv.append(questionBoxDiv);



