// Show answer button

// const answerButton = document.querySelector('[data-js="button"]');
// const cardAnswer = document.querySelector('[data-js="answer"]');

// answerButton.addEventListener("click", () => {
//   cardAnswer.classList.toggle("card__answer--show");
// });
const answerButton1 = document.querySelector('[data-js="button1"]');
const cardAnswer1 = document.querySelector('[data-js="answer1"]');

answerButton1.addEventListener("click", () => {
  cardAnswer1.classList.toggle("card__answer--show");
});

const answerButton2 = document.querySelector('[data-js="button2"]');
const cardAnswer2 = document.querySelector('[data-js="answer2"]');

answerButton2.addEventListener("click", () => {
  cardAnswer2.classList.toggle("card__answer--show");
});

const answerButton3 = document.querySelector('[data-js="button3"]');
const cardAnswer3 = document.querySelector('[data-js="answer3"]');

answerButton3.addEventListener("click", () => {
  cardAnswer3.classList.toggle("card__answer--show");
});

const answerButton4 = document.querySelector('[data-js="button4"]');
const cardAnswer4 = document.querySelector('[data-js="answer4"]');

answerButton4.addEventListener("click", () => {
  cardAnswer4.classList.toggle("card__answer--show");
});

// dark mode

const bodyElement = document.querySelector('[data-js="body"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
