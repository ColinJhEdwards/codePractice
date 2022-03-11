const input = document.querySelector(".input");
const submitBtn = document.querySelector(".submitBtn");
const todoList = document.querySelector(".todo-list");

// event listeners
submitBtn.addEventListener("click", createTodo);

//functions
function createTodo(e) {
  e.preventDefault();
  //create div to hold text and btns
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");
  //Create li
  const item = document.createElement("li");
  item.innerText = input.value;
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
}
