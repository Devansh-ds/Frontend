const todoList = [
  {
    name: "make dinner",
    dueDate: "2022-12-22",
  },
  {
    name: "sleep",
    dueDate: "2024-12-22",
  },
];

renderTodoList();

function renderTodoList() {
  let todoListHtml = "";

  todoList.forEach(function (todoObject, i) {
    const { name, dueDate } = todoObject;
    const html = `
      <div>
        ${name}
      </div> 
      <div>
        ${dueDate}
      </div>
        <button class='delete-todo-btn js-delete-button'>Delete</button>
       `;
    todoListHtml += html;
  });

  console.log(todoListHtml);

  document.querySelector(".js-todo-list").innerHTML = todoListHtml;

  document.querySelectorAll(".js-delete-button").forEach((deleteButton, index) => {
    deleteButton.addEventListener("click", () => {
      todoList.splice(index, 1);
      renderTodoList();
    });
  });
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  const dateInputElement = document.querySelector(".js-due-date");
  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate,
  });
  console.log(todoList);

  inputElement.value = "";

  renderTodoList();
}

document.querySelector(".js-add-button").addEventListener("click", () => {
  addTodo();
});
