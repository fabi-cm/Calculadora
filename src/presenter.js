import sumar from "./sumador";
import multiplicador from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");

const first_m = document.querySelector("#primer-numero-m");
const second_m = document.querySelector("#segundo-numero-m");

const form = document.querySelector("#sumar-form");
const form_m = document.querySelector("#multiplicar-form");

const div = document.querySelector("#resultado-div");
const div_m = document.querySelector("#resultado-mult");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

form_m.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first_m.value);
  const secondNumber = Number.parseInt(second_m.value);

  div_m.innerHTML = "<p>" + multiplicador(firstNumber, secondNumber) + "</p>";
});