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

// bookmark toggle
// 1
const bookmarkButton1 = document.querySelector('[data-js="bookmark__button1"]');

bookmarkButton1.addEventListener("click", () => {
  bookmarkButton1.style.color =
    bookmarkButton1.style.color === "orange" ? "lightgray" : "orange";
});

// 2
const bookmarkButton2 = document.querySelector('[data-js="bookmark__button2"]');

bookmarkButton2.addEventListener("click", () => {
  bookmarkButton2.style.color =
    bookmarkButton2.style.color === "orange" ? "lightgray" : "orange";
});

// 3
const bookmarkButton3 = document.querySelector('[data-js="bookmark__button3"]');

bookmarkButton3.addEventListener("click", () => {
  bookmarkButton3.style.color =
    bookmarkButton3.style.color === "orange" ? "lightgray" : "orange";
});

// 4
const bookmarkButton4 = document.querySelector('[data-js="bookmark__button4"]');

bookmarkButton4.addEventListener("click", () => {
  bookmarkButton4.style.color =
    bookmarkButton4.style.color === "orange" ? "lightgray" : "orange";
});

// dark mode

const bodyElement = document.querySelector('[data-js="body"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
