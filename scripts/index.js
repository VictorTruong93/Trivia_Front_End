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
}


function accumulateData(grabData) {
    answers = []
    console.log(grabData.results[0]);
    let infoData = grabData.results[0];
    incorrect = infoData.incorrect_answers
    incorrect.push(infoData.correct_answer)
    answers.push(incorrect)
    drawQuestionsToPage(infoData);
}

function drawQuestionsToPage(grabQuestion) {
    let questionDiv = document.querySelector('[data-question]');
    questionDiv.textContent='';
    const questionBoxDiv = document.createElement('div');

    questionBoxDiv.textContent= `Question: ${grabQuestion.question}`;
    questionDiv.append(questionBoxDiv);
    console.log(answers)
    console.log(shuffle(answers))

}































//     .then(function (data){
//         resultsArray = data.results;
//         // console.log(resultsArray);
//         return resultsArray
//         // console.log(Object.results(data));
//     })
//     .then(function (resultsArray){
//         let myQuestion = resultsArray[0].question;
//         // console.log(myQuestion);
//         let myAnswer = resultsArray[0].correct_answer;
//         // console.log(myAnswer);
//         let myNonAnswer = resultsArray[0].incorrect_answers;
//         // console.log(myNonAnswer);
//         triviaGame.push(myQuestion, myAnswer, myNonAnswer)
//         return triviaGame
//     })
//     .then(drawQuestionsToPage)

//     .then(drawAnswersToPage(triviaGame[1]))
// }

// function drawQuestionsToPage(triviaData){
//     console.log(triviaData[0]);
//     let questionDiv = document.querySelector('[data-question]');
//     questionDiv.textContent = '';
//     // console.log(questionDiv);
//     questionDiv.textContent = triviaData[0];
// };

