let quotes = [];
let num = 0;
let amount = 0;
let genquote = document.getElementById("js-new-quote");
let showquote = document.getElementById("js-tweet");
let txt = document.getElementById("txt");
num = 0;
fetch("https://type.fit/api/quotes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    amount = data.length;
    for (let i = 0; i < amount; i++) {
      console.log(data[i]);
      quotes.push({ author: data[i].author, text: data[i].text });
    }
  });
genquote.addEventListener("click", function () {
  num++;
  if (amount == num) {
    num = 0;
  }
});

showquote.addEventListener("click", function () {
  txt.innerHTML = quotes[num].text;
  if (amount == num) {
    num = 0;
  }
});
