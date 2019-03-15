let scienceURL = "https://my-little-cors-proxy.herokuapp.com/https://opentdb.com/api.php?amount=1&category=17&difficulty=easy&type=multiple";

let data = [];
let triviaGame = [];

function getData(url){
    fetch(url)
    .then(function(response){
        let data = response.json();
        console.log(data);
        return data;
    })
    .then(function (data){
        resultsArray = data.results;
        console.log(resultsArray);
        return resultsArray
        // console.log(Object.results(data));
    })
    .then(function (resultsArray){
        let myQuestion = resultsArray[0].question;
        // console.log(myQuestion);
        let myAnswer = resultsArray[0].correct_answer;
        // console.log(myAnswer);
        let myNonAnswer = resultsArray[0].incorrect_answers;
        // console.log(myNonAnswer);
        triviaGame.push(myQuestion, myAnswer, myNonAnswer)
        return triviaGame
    })
    .then(drawQuestionsToPage)
    .then(drawAswersToPage)
}

function drawQuestionsToPage(triviaData){
    console.log(triviaData);
    let questionDiv = document.querySelector('[data-question]');
    questionDiv.textContent = '';
    // console.log(questionDiv);
    questionDiv.textContent = triviaData[0];
};


