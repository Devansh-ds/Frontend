const add = function () {
  console.log(2 + 3);
};

add();

const runTwice = function (param) {
  param();
  param();
};

runTwice(add);

let isFinished = false;

setTimeout(function () {
  isFinished = true;
}, 4000);

function finishIt() {
  const btn = document.querySelector(".js-start");

  if (isFinished) {
    btn.innerHTML = "Finished!";
  } else {
    btn.innerHTML = "Loading...";
  }
}

let timeoutId = "";

function addToCart() {
  const addSection = document.querySelector(".js-display");
  addSection.innerHTML = "Added!";

  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    addSection.innerHTML = "";
  }, 3000);
}

let message = 0;
let displayValue = `(${message}) New Messages`;

function changeTitle() {
  document.title = displayValue;
}

function addMessage() {
  message++;
  displayValue = `(${message}) New Messages`;
  changeTitle();
}

function removeMessage() {
  if (message <= 1) {
    displayValue = "App";
  } else {
    message--;
    displayValue = `(${message}) New Messages`;
  }
  changeTitle();
}
