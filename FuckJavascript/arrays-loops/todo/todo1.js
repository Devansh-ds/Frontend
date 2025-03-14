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

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
      <div>
        ${name}
      </div> 
      <div>
        ${dueDate}
      </div>
        <button onclick = "
          todoList.splice(${i}, 1);
          renderTodoList();
        " class='delete-todo-btn'>Delete</button>
       `;
    todoListHtml += html;
  }

  console.log(todoListHtml);

  document.querySelector(".js-todo-list").innerHTML = todoListHtml;
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
