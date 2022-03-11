const input = document.querySelector(".todo-input");
const submitBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event listeners
submitBtn.addEventListener("click", createTodo);
todoList.addEventListener("click", deleteCheck);

//functions
function createTodo(e) {
  e.preventDefault();
  //create todoDiv to hold the li for styling purposes
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create todo
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-item");
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
  input.value = "";
}

function deleteCheck(e) {
  const selected = e.target.parentNode;
  if (e.target.classList.contains("complete-btn")) {
    selected.classList.toggle("completed");
  } else if (e.target.classList.contains("trash-btn")) {
    selected.classList.add("fall");
    selected.addEventListener("transitionend", () => {
      selected.remove();
    });
  }
}
