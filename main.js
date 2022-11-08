"use strict";

const btn = document.querySelector(".js-btn");
const input = document.querySelector(".js-input");
const text = document.querySelector(".js-text");
const triesElement = document.querySelector(".js-tries");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//pc
function generateNumber() {
  const randomNumber = getRandomNumber(100);
  return randomNumber;
}
generateNumber();
const randomNumber = generateNumber();
console.log(randomNumber, `computer`);

// usuario
function getGamer() {
  return parseInt(input.value);
}

// contador
let triesCounter = 0;

// manejadora
function handleClick(event) {
  event.preventDefault();
  const gamer = getGamer();
  console.log(gamer, `gamer`);

  if (gamer > randomNumber) {
    text.innerHTML = ` Pista: Demasiado alto, sigue intentándolo.`;
  } else if (gamer < randomNumber) {
    text.innerHTML = `Pista: Demasiado bajo, sigue intentándolo.`;
  } else {
    text.innerHTML = `Lo has adivinado!!!`;
  }
  triesCounter++;
  triesElement.innerHTML = triesCounter;
}
//evento
btn.addEventListener("click", handleClick);
