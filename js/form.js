const form = document.querySelector('[data-js="form"]');

const charactersLeft1 = document.querySelector('[data-js="characters-left1"]');
const charactersLeft2 = document.querySelector('[data-js="characters-left2"]');

// characters left
form.addEventListener("input", () => {
  charactersLeft1.innerText = 150 - question.value.length;
  charactersLeft2.innerText = 150 - answer.value.length;
});

// new cards
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = new FormData(event.target);
  const data = Object.fromEntries(formElements);

  const cardContainer = document.createElement("section");
  cardContainer.classList.add("card");
  document.body.append(cardContainer);
  cardContainer.innerHTML = ` <i
          class="fa fa-fw fa-bookmark bookmark card__bookmark"
          data-js="bookmark__button"
        ></i>`;

  const cardQuestion = document.createElement("h2");
  cardQuestion.innerText = data.question;
  cardQuestion.classList.add("card__question");
  cardContainer.appendChild(cardQuestion);

  const cardButton = document.createElement("button");
  cardButton.innerText = "Show Answer";
  cardButton.classList.add("card__button");
  cardButton.style.marginBottom = "50px";
  cardContainer.appendChild(cardButton);

  const cardAnswer = document.createElement("p");
  cardAnswer.innerText = data.answer;
  cardAnswer.classList.add("card__answer");
  cardContainer.appendChild(cardAnswer);

  const cardTags = document.createElement("div");
  cardTags.classList.add("card__tags");
  cardContainer.appendChild(cardTags);

  const cardHashtag = document.createElement("p");
  cardHashtag.innerText = data.tag;
  cardHashtag.classList.add("card__hashtag");
  cardTags.appendChild(cardHashtag);

  // answer button
  cardButton.style.marginBottom = "50px";

  cardButton.addEventListener("click", () => {
    cardAnswer.classList.toggle("hidden");

    cardButton.innerText =
      cardButton.innerText === "Show Answer" ? "Hide Answer" : "Show Answer";

    cardButton.style.marginBottom =
      cardButton.style.marginBottom === "0px" ? "50px" : "0px";
  });

  // bookmark toggle
  const cardBookmark = document.querySelector('[data-js="bookmark__button"]');

  cardBookmark.addEventListener("click", () => {
    cardBookmark.style.color =
      cardBookmark.style.color === "orange" ? "lightgray" : "orange";
  });
});
