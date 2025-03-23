const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
const resetBtn = document.querySelector(".reset");
let playingAgain = false;

resetBtn.addEventListener("click", resetBoard);

let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];

sortCards();
createBoard();

function sortCards() {
  cardArray.sort(() => 0.5 - Math.random());
}

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
  }
}

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];

  if (optionOneId === optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
  } else if (cardsChosen[0] === cardsChosen[1]) {
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);

    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
  }

  resultDisplay.innerHTML = cardsWon.length;
  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = "Congratulations!";
    resetBtn.innerHTML = "Play Again";
    playingAgain = true;
  }
}

function flipCard() {
  let cardId = this.getAttribute("data-id");

  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);

  console.log(cardsChosen);
  console.log(cardsChosenIds);

  this.setAttribute("src", cardArray[cardId].img);

  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function resetBoard() {
  if (playingAgain) {
    resetBtn.innerHTML = "Reset";
    playingAgain = false;
  }

  cardsWon = [];
  resultDisplay.innerHTML = cardsWon.length;
  sortCards();
  gridDisplay.innerHTML = "";
  createBoard();
}
