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

}

//the Fisher-Yates Shuffle function!
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    
    console.log(array);
    return array;
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

