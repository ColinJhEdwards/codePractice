const input = document.querySelector(".todo-input");
const submitBtn = document.querySelector(".todo-button");
const todoContain = document.querySelector(".todo-container");
const todoList = document.querySelector(".todo-list");

//Event listeners
submitBtn.addEventListener("click", createTodo);

//functions
function createTodo(e) {
  e.preventDefault();
  //create todoDiv to hold the li for styling purposes
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create todo
  const todoItem = document.createElement("li");
  todoItem.innerText = input.value;
  todoDiv.append(todoItem);
  //complete btn & delete btn
  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete-btn");
  completeBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
  todoDiv.append(completeBtn);
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("trash-btn");
  deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  todoDiv.append(deleteBtn);
  //add content to page
  todoList.append(todoDiv);
}
