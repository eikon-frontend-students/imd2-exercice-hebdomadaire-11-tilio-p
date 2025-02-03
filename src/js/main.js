var color = document.querySelector(".button");

var texte = document.querySelector(".texte");

var heart = document.querySelector(".heart");

var number = document.querySelector(".number");

function changeColo() {
  color.classList.add("is-active");
}

color.addEventListener("click", changeColo);

function changeTexte() {
  texte.classList.add("is-active");
}

color.addEventListener("click", changeTexte);

function changeHeart() {
  heart.classList.add("is-active");
}

color.addEventListener("click", changeHeart);

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById(".number").addEventListener("click", function () {
    this.innerText = "148";
  });
});
