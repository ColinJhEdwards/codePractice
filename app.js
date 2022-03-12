const input = document.querySelector(".input");
const submitBtn = document.querySelector(".submitBtn");
const todoList = document.querySelector(".todo-list");

// event listeners
submitBtn.addEventListener("click", createTodo);
todoList.addEventListener("click", deleteCheck);
document.addEventListener("DOMContentLoaded", loadStorage);

//functions
function createTodo(e) {
  if (input.value === "") {
    return;
  } else {
    e.preventDefault();
    //create div to hold text and btns
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    //Create li
    const item = document.createElement("li");
    item.innerText = input.value;
    todoItem.append(item);
    saveToStorage(input.value);
    //    create buttons
    const completeBtn = document.createElement("button");
    completeBtn.classList.add("completeBtn");
    completeBtn.innerText = "O";
    const trashBtn = document.createElement("button");
    trashBtn.classList.add("trashBtn");
    trashBtn.innerText = "X";
    todoItem.append(completeBtn, trashBtn);
    todoList.append(todoItem);
    input.value = "";
  }
}

function deleteCheck(e) {
  const item = e.target.parentNode;
  if (e.target.classList.contains("completeBtn")) {
    item.classList.toggle("completed");
  } else if (e.target.classList.contains("trashBtn")) {
    item.classList.add("fall");
    item.addEventListener("transitionend", () => {
      item.remove();
    });
  }
}

function saveToStorage(todo) {
  //Check local storage, is there stuff stored already?
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach((t) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    //Create li
    const item = document.createElement("li");
    item.innerText = t;
    todoItem.append(item);
    //    create buttons
    const completeBtn = document.createElement("button");
    completeBtn.classList.add("completeBtn");
    completeBtn.innerText = "O";
    const trashBtn = document.createElement("button");
    trashBtn.classList.add("trashBtn");
    trashBtn.innerText = "X";
    todoItem.append(completeBtn, trashBtn);
    todoList.append(todoItem);
  });
}
