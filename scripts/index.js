
// no need for URL global variable, changeCategory function generates URL
// let generalURL = "https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple";


let score = 0; //stores the score. It has to be a global variable
let answers = []; //stores the answers drawn from the API
// let userAnswer = ""; not needed, userAnswer defined in function.

//allows the user to change categories
//this further interpolates the URL of the API 
function changeCategory() {
    //sorry about the Id's Chris! April told me to do it! :)
    let newDifficulty = document.getElementById("difficulty")
    let selectedDifficulty = newDifficulty[newDifficulty.selectedIndex].value;
    let newCategory = document.getElementById("select-category");
    let selectedValue = newCategory[newCategory.selectedIndex].value;
    generalURL = `https://opentdb.com/api.php?amount=1&category=${selectedValue}&difficulty=${selectedDifficulty}&type=multiple`;

    return generalURL;

}

//initiates the URL pull and fetch functions
function userInitiate (){
    
    changeCategory()
    getData(generalURL);
}

//our fetch function
//this passes the array generated from our API pull into the other functions that start our Trivia Game off
function getData(url){
    //erases the the previous question's answer for the user
    userAnswer = '';
    let answerDisplay = document.querySelector("[data-selectedAnswer]");
    answerDisplay.textContent = userAnswer;
    /////////////////////////////////////////////////////////
    fetch(url)

    .then(function(response){
        let data = response.json();
        return data;
        })
        .then(accumulateData)
        .then(shuffle)
        .then(randomAssign)
}

//takes our initial data array and seperates out the information that we want
//namely, the question, correct answer, and incorrect answers
function accumulateData(grabData) {
    answers = []
    console.log(grabData.results[0]);
    let infoData = grabData.results[0];
    incorrect = [...infoData.incorrect_answers];
    //pushes the correct answer into the incorrect answer array
    incorrect.push(infoData.correct_answer);
    answers = [...incorrect];
    //passes the data we retrived down the chain
    drawQuestionsToPage(infoData);
    console.log(answers)
    return [...answers]
}

//draws the question we recieved earlier onto our page
function drawQuestionsToPage(grabQuestion) {
    let questionDiv = document.querySelector('[data-question]');
    questionDiv.textContent='';
    const questionBoxDiv = document.createElement('div');
    let rawQ = grabQuestion.question;
    // uses he.decode to display XML special characters 
    questionBoxDiv.textContent= `${he.decode(rawQ)}`;
    questionDiv.append(questionBoxDiv);
}

//the Fisher-Yates Shuffle function!
//shuffles the answers array so that the correct answer isn't always the last choice
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

//assigns the shuffled answers from the shuffle function to our radio buttons
function randomAssign (array){
    let radioA = document.querySelector("[data-A]");
    radioA.textContent = he.decode(array[0]);
    let radioB = document.querySelector("[data-B]");
    radioB.textContent = he.decode(array[1]);
    let radioC = document.querySelector("[data-C]");
    radioC.textContent = he.decode(array[2]);
    let radioD = document.querySelector("[data-D]");
    radioD.textContent = he.decode(array[3]);
}

//allows users to select an answer from the page and stores it to be referenced back to later
function storeUserAnswer(){  
    userAnswer = event.target.textContent;
    let answerDisplay = document.querySelector("[data-selectedAnswer]");
    answerDisplay.textContent = userAnswer;
    console.log(userAnswer);
    return userAnswer;
}

//compares the user's choosen answer to the stored answer that we extracted earlier
//it triggers when the user clickes the submit button 
//then it increments the score accordingly
function submitAndScore(){
    if(userAnswer === he.decode(answers[3])){
        score += 1;
        alert(`Great job! Your score is now ${score}!`)
        let newScore = document.querySelector('[data-score]');
        newScore.textContent = score
    }else{
        alert(`Wrong! The correct answer is ${he.decode(answers[3])}!`);
        score -= 1;
        if (score === -1) {
            score = 0;
        }
        let newScore = document.querySelector('[data-score]');
        newScore.textContent = score;
    }
    //once it runs the function, it generates a new fetch that starts the whole sequence again
    getData(generalURL);
}

for (var link of document.querySelectorAll("link[rel=stylesheet]")) {
    link.href = link.href.replace(/\?.*|$/, "?ts=" + new Date().getTime())
}

