// const testBtn = document.querySelector(".js-button");
// if (testBtn.classList.contains("js-button")) {
//   console.log("Yes it has");
// }

function toggleBtn(buttonClass) {
  const btn = document.querySelector(buttonClass);

  if (btn.classList.contains("is-toggled")) {
    btn.classList.remove("is-toggled");
  } else {
    btn.classList.add("is-toggled");
  }
}
