let scienceURL = "https://my-little-cors-proxy.herokuapp.com/https://opentdb.com/api.php?amount=1&category=17&difficulty=easy&type=multiple";

let score = 0;
let answers = [];
let userAnswer = "";

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
function randomAssign (array){
    let radioA = document.querySelector("[data-A]")
    radioA.textContent = array[0]
    let radioB = document.querySelector("[data-B]")
    radioB.textContent = array[1]
    let radioC = document.querySelector("[data-C]")
    radioC.textContent = array[2]
    let radioD = document.querySelector("[data-D]")
    radioD.textContent = array[3]
}

function storeUserAnswer(){  
    userAnswer = event.target.textContent
    console.log(userAnswer)
}


function userToggle(selection) {

}


function submitAndScore(){
    if(userAnswer === answers[3]){
        score = score+1;
        let newScore = document.querySelector('[data-score]');
        newScore.textContent = score
    }else if(userAnswer === answers[3]){
        score = score+1;
        let newScore = document.querySelector('[data-score]');
        newScore.textContent = score
    }else if(userAnswer === answers[3]){
        score = score+1;
        let newScore = document.querySelector('[data-score]');
        newScore.textContent = score
    }else if(userAnswer === answers[3]){
        score = score+1;
        let newScore = document.querySelector('[data-score]');
        newScore.textContent = score
    }else{
        alert(`Wrong! The correct answer is ${answers[3]}!`);
    }
    getData(scienceURL);
}
