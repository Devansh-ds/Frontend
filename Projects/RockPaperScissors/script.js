const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoice = document.querySelectorAll(".user-move");
const resetButton = document.querySelector(".reset");
const autoplayButton = document.querySelector(".autoplay");
let intervalId;
let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  loose: 0,
  tie: 0,
};

let isAutplaying = false;

displayScore();

let userChoice;
let computerChoice;
let result;

const win = "You win!";
const loose = "You lost";
const tie = "It's a Tie!";

document.querySelector(".js-rock").addEventListener("click", () => {
  playGame("rock");
});

document.querySelector(".js-paper").addEventListener("click", () => {
  playGame("paper");
});

document.querySelector(".js-scissors").addEventListener("click", () => {
  playGame("scissors");
});

function playGame(userChoice) {
  userChoiceDisplay.innerHTML = `User: <img src="images/${userChoice}-emoji.png">`;
  let choice1 = generateComputerChoice();
  displayComputerChoice(choice1);
  getResult(userChoice);
}

function autoplayGame() {
  userChoice = generateComputerChoice();
  userChoiceDisplay.innerHTML = `User: <img src="images/${userChoice}-emoji.png">`;
  let choice1 = generateComputerChoice();
  displayComputerChoice(choice1);
  getResult(userChoice);
}

function generateComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 0.3) {
    computerChoice = "rock";
  } else if (randomNumber < 0.6) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  console.log(computerChoice);
  return computerChoice;
}

function displayComputerChoice(computerChoice) {
  console.log(computerChoice);
  computerChoiceDisplay.innerHTML = `Computer: <img src="images/${computerChoice}-emoji.png" alt="" />`;
}

function getResult(userChoice) {
  if (computerChoice === userChoice) {
    result = tie;
  } else if (computerChoice === "rock" && userChoice === "scissors") {
    result = loose;
  } else if (computerChoice === "rock" && userChoice === "paper") {
    result = win;
  } else if (computerChoice === "paper" && userChoice === "rock") {
    result = loose;
  } else if (computerChoice === "paper" && userChoice === "scissors") {
    result = win;
  } else if (computerChoice === "scissors" && userChoice === "rock") {
    result = win;
  } else if (computerChoice === "scissors" && userChoice === "paper") {
    result = loose;
  } else {
    result = "what the fuck";
  }

  updateScore(result);
  resultDisplay.innerHTML = `Result: ${result}`;
}

function displayScore() {
  document.querySelector(".js-score").innerHTML = `
      <h4 class="js-win win">Wins: ${score.win}</h4>
      <h4 class="js-loose loose">Loose: ${score.loose}</h4>
      <h4 class="js-tie tie">Tie: ${score.tie}</h4>
        `;
}

function updateScore(result) {
  if (result == win) {
    score.win += 1;
  } else if (result === loose) {
    score.loose += 1;
  } else {
    score.tie += 1;
  }
  displayScore();
  saveScore();
}

function saveScore() {
  localStorage.setItem("score", JSON.stringify(score));
}

resetButton.addEventListener("click", () => {
  score.win = 0;
  score.loose = 0;
  score.tie = 0;

  saveScore();
  displayScore();
});

autoplayButton.addEventListener("click", () => {
  if (!isAutplaying) {
    autoplayButton.innerHTML = "Stop";
    intervalId = setInterval(() => {
      autoplayGame();
    }, 1000);
    isAutplaying = true;

    autoplayButton.classList.add("stop");
  } else {
    clearInterval(intervalId);
    autoplayButton.innerHTML = "Autoplay";
    isAutplaying = false;
    autoplayButton.classList.remove("stop");
  }
});
