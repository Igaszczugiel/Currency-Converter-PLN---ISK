let result = document.getElementById("result");
let form = document.querySelector('#convertIt');

form.addEventListener("submit", convertCurrency);

function convertCurrency(event) {
    event.preventDefault();
    let currencyCode = document.querySelector('#currencyListFrom').value;
    let url = `https://api.nbp.pl/api/exchangerates/rates/a/${currencyCode}/?format=json`;

    fetch(url).then(resp => resp.json()).then((response) => {
        console.log(response.rates[0].mid);
        let currencyRate = response.rates[0].mid;
        let amount = document.getElementById("amount").value;
        let total = currencyRate * amount;
        result.innerHTML = total.toFixed(2);
    })
}; 


// joke -> 
const jokeText = document.querySelector(".joke-text");
const newJokeBtn = document.querySelector(".new-joke-btn");
const tweetBtn = document.querySelector(".new-joke-btn");

newJokeBtn.addEventListener("click", getJoke);

getJoke();

function getJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      "Accept": "application/json"
    }
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    const joke = data.joke;
    jokeText.innerText = joke;


  }).catch(function(error) {
    jokeText.innerText = "Ayy! Seems that you don't deserve a joke today!:(";
    console.log(error);
  });
}