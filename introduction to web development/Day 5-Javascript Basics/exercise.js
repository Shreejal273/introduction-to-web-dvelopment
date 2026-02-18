const textElement = document.querySelector(".js-counter-text");
const buttonInc = document.querySelector(".js-increment-btn");
const buttonDec = document.querySelector(".js-decrement-btn");

let counter = 0;

buttonInc.addEventListener("click", function () {
  counter++;
  textElement.textContent = counter;
});

buttonDec.addEventListener("click", function () {
  counter--;
  textElement.textContent = counter;
});

// Dog Age Calculator

const ageInput = document.querySelector(".js-age-input");
const buttonCalculate = document.querySelector(".js-calculate-btn");
const textResult = document.querySelector(".js-result");

buttonCalculate.addEventListener("click", function () {
  const humanAge = Number(ageInput.value);

  if (!humanAge || humanAge <= 0) {
    textResult.textContent = "Please enter a valid age.";
    ageInput.style.border = "2px solid red";
    return;
  }

  let dogAge;

  if (humanAge <= 15) {
    dogAge = humanAge / 15;
  } else if (humanAge <= 24) {
    dogAge = 1 + (humanAge - 15) / 9;
  } else {
    dogAge = 2 + (humanAge - 24) / 5;
  }

  dogAge = dogAge.toFixed(2);
  textResult.textContent = `your dog age is ${dogAge}`;
});
