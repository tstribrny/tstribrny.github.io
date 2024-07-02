const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const images = [
  "bobby.jpg",
  `brutus.jpg`,
  `marly.jpg`,
  `nick.jpg`,
  `taylors.jpg`,
];
const alts = {
  "bobby.jpg": "Bobby the cat",
  "brutus.jpg": "My cat brutus",
  "marly.jpg": "Malry arrives with diet coke",
  "nick.jpg": "My friend nick in the sun",
  "taylors.jpg": "Picture of me",
};

for (const image of images) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `images/${image}`);
  newImage.setAttribute("alt", alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener("click", (e) => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

btn.addEventListener("click", () => {
  const btnClass = btn.getAttribute("class");
  if (btnClass === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
});
