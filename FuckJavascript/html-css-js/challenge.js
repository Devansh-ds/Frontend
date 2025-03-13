let calculation = localStorage.getItem("calculation") || "";

function updateCalculation(item) {
  calculation += item;

  displayCalculation();
  localStorage.setItem("calculation", calculation);
}

function displayCalculation() {
  const disp = document.querySelector(".js-result");
  disp.innerHTML = calculation || "";
}
