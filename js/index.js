// answer button
// 1
const answerButton1 = document.querySelector('[data-js="button1"]');
const cardAnswer1 = document.querySelector('[data-js="answer1"]');

answerButton1.style.marginBottom = "50px";

answerButton1.addEventListener("click", () => {
  cardAnswer1.classList.toggle("hidden");

  answerButton1.innerText =
    answerButton1.innerText === "Show Answer" ? "Hide Answer" : "Show Answer";

  answerButton1.style.marginBottom =
    answerButton1.style.marginBottom === "0px" ? "50px" : "0px";
});

// 2
const answerButton2 = document.querySelector('[data-js="button2"]');
const cardAnswer2 = document.querySelector('[data-js="answer2"]');

answerButton2.style.marginBottom = "50px";

answerButton2.addEventListener("click", () => {
  cardAnswer2.classList.toggle("hidden");

  answerButton2.innerText =
    answerButton2.innerText === "Show Answer" ? "Hide Answer" : "Show Answer";

  answerButton2.style.marginBottom =
    answerButton2.style.marginBottom === "0px" ? "50px" : "0px";
});

// 3
const answerButton3 = document.querySelector('[data-js="button3"]');
const cardAnswer3 = document.querySelector('[data-js="answer3"]');

answerButton3.style.marginBottom = "50px";

answerButton3.addEventListener("click", () => {
  cardAnswer3.classList.toggle("hidden");

  answerButton3.innerText =
    answerButton3.innerText === "Show Answer" ? "Hide Answer" : "Show Answer";

  answerButton3.style.marginBottom =
    answerButton3.style.marginBottom === "0px" ? "50px" : "0px";
});

// 4
const answerButton4 = document.querySelector('[data-js="button4"]');
const cardAnswer4 = document.querySelector('[data-js="answer4"]');

answerButton4.style.marginBottom = "50px";

answerButton4.addEventListener("click", () => {
  cardAnswer4.classList.toggle("hidden");

  answerButton4.innerText =
    answerButton4.innerText === "Show Answer" ? "Hide Answer" : "Show Answer";

  answerButton4.style.marginBottom =
    answerButton4.style.marginBottom === "0px" ? "50px" : "0px";
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

// const bodyElement = document.querySelector('[data-js="body"]');
// const toggleButton = document.querySelector('[data-js="toggle-button"]');

// toggleButton.addEventListener("click", () => {
//   bodyElement.classList.toggle("dark");
// });
