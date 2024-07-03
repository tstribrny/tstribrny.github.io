let quote = document.querySelector(".quote");
let text = document.querySelector(".quote_text");
let author = document.querySelector(".quote_author");
let btn = document.querySelector("button");

function getQuote() {
  fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      let index = Math.round(Math.random() * 1643);
      text.innerHTML = data[index].text;
      author.innerHTML = data[index].author;
    });
}

window.addEventListener("load", getQuote);
