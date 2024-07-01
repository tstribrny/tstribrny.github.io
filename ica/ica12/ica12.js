const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

const newQuote = document.querySelector("js-new-quote");
newQuote.addEventListener("click", getTrivia);

const answerBtn = document
  .querySelector("#js-tweet")
  .addEventListener("click", displayAnswer);

let answerTxt = document.querySelector("#js-answer-text");
let answer = "";

async function getTrivia() {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    displayTrivia(json["question"]);
    answer = json["answer"];
    answerTxt.textContent = "";
  } catch (err) {
    console.log(err);
    alert("Failed to fetch new quote");
  }
}

function displayTrivial(quote) {
  const triviaText = document.querySelecto("#js-quote-text");
  triviaText.textContent = quote;
}

function displayAnswer() {
  answerTxt.textContent = answer;
}

getTrivia();
