// const mainElement = document.querySelector('[data-js="main"]');

// const toggleButton = document.querySelector('[data-js="toggle-button"]');
// toggleButton.addEventListener("click", () => {
//   mainElement.classList.toggle("dark");
//   //   console.log("Button pressed");
// });

const bodyElement = document.querySelector('[data-js="body"]');

const toggleButton = document.querySelector('[data-js="toggle-button"]');
toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
  //   console.log("Button pressed");
});
