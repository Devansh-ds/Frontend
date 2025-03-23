const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const beforeGame = document.querySelector(".score-time");
const afterG = document.querySelector("#afterGameScore");

let hitPosition;
const gameTime = 10;
let currentTime = gameTime;
let result = 0;
let timerId = null;
let countDownTimerId = null;
let isPlaying = false;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");

  hitPosition = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id === hitPosition) {
      result++;
      score.textContent = `Score: ${result}`;
      hitPosition = null;
    }
  });
});

function moveMole() {
  timerId = setInterval(randomSquare, 1000);
}

document.querySelector(".reset").addEventListener("click", () => {
  if (!isPlaying) {
    isPlaying = true;
    moveMole();
    countDownTimerId = setInterval(countDown, 1000);

    score.textContent = `Score: ${result}`;
    timeLeft.innerHTML = `Time left: ${currentTime}`;

    afterG.classList.add("toggle");
    beforeGame.classList.remove("toggle");
  }
});

function countDown() {
  currentTime--;
  timeLeft.innerHTML = `Time left: ${currentTime}`;

  if (currentTime === 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);

    afterG.innerHTML = `Total Score: ${result}`;
    afterG.classList.remove("toggle");
    beforeGame.classList.add("toggle");

    isPlaying = false;
    currentTime = gameTime;
    result = 0;
  }
}
