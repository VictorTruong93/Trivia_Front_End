const scienceURL = "https://my-little-cors-proxy.herokuapp.com/https://opentdb.com/api.php?amount=20&category=17&difficulty=easy&type=multiple";

function getQs(url) {
    fetch(url)
    .then(function(response) {
        console.log(response.json());
    })
}
