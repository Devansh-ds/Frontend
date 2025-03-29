const inputText = document.querySelector(".js-input-text");
const addButton = document.querySelector(".js-input-button");
const taskArea = document.querySelector(".js-all-tasks");

const todoList = JSON.parse(localStorage.getItem("tasks")) || [
  {
    text: "first task",
    ticked: false,
  },
  {
    text: "second task",
    ticked: false,
  },
];

renderTodoList();

function renderTodoList() {
  let todoListHtml = "";
  todoList.forEach((todoObject, i) => {
    let ticked = "";
    let linethrough = "";
    if (todoObject.ticked) {
      ticked = "ticked";
      linethrough = "line-through";
    }
    let html = `
        <div class="task js-task">
          <div class="our-task">
            <button class="tick js-tick ${ticked}"><i class="fa-solid fa-check"></i></button>
            <h2 class="${linethrough} js-h2">${todoObject.text}</h2>
          </div>
          <button class="cross js-delete-button"><i class="fa-solid fa-xmark"></i></button>
        </div>`;
    todoListHtml += html;
  });
  taskArea.innerHTML = todoListHtml;

  document.querySelectorAll(".js-delete-button").forEach((deleteButton, index) => {
    deleteButton.addEventListener("click", () => {
      todoList.splice(index, 1);
      renderTodoList();
      saveToStorage();
    });
  });

  document.querySelectorAll(".js-tick").forEach((tickButton, index) => {
    tickButton.addEventListener("click", () => {
      if (tickButton.classList.contains("ticked")) {
        tickButton.classList.remove("ticked");
        document.querySelectorAll(".js-h2")[index].classList.remove("line-through");
        todoList[index].ticked = false;
      } else {
        tickButton.classList.add("ticked");
        document.querySelectorAll(".js-h2")[index].classList.add("line-through");
        todoList[index].ticked = true;
      }
      saveToStorage();
    });
  });
}

function addTodo() {
  todoList.push({
    text: inputText.value,
    ticked: false,
  });
  inputText.value = "";
  renderTodoList();
  saveToStorage();
}

addButton.addEventListener("click", () => {
  addTodo();
});

function saveToStorage() {
    localStorage.setItem("tasks", JSON.stringify(todoList));
}
