let scienceURL = "https://my-little-cors-proxy.herokuapp.com/https://opentdb.com/api.php?amount=1&category=17&difficulty=easy&type=multiple";

let data = [];
let triviaGame = [];

//we need a function that will grab the questions for us
function getMyTriviaData(findMyTrivia){
    let myQuestion = findMyTrivia.data[0].question;
    let correctAnswer = findMyTrivia.data[0].correct_answer;
    let incorrectAnswers = findMyTrivia.data[0].incorrect_answers;
    console.log(myQuestion)

    triviaGame.append(myQuestion)
    return myQuestion, correctAnswer, incorrectAnswers;   

}

// //we need a function that will grab the answers for us
// function getMyAnswer(findCorrectAnswer){
//     let correctAnswer = findCorrectAnswer.results[0].correct_answer;
//     return correctAnswer;
// };

// function getMyFakes(findIncorrectAnswers){
//     let incorrectAnswers = findIncorrectAnswers.results[0].incorrect_answers;
//     return incorrectAnswers;
// };
// function main(){
//     getMyQuestion();
//     getMyAnswer();
//     getMyFakes();
// };

function getQs(url) {
    //fetchs our API data
    fetch(url)
    .then(function(response) {
        //returns the API data as JSON
        // return response.json();
        let data = response.json();
        console.log(data);
        return data;
    })
    getMyTriviaData(data);
};