// selecters
const input = document.querySelector(".input");
const submitBtn = document.querySelector(".submitBtn");
const todoList = document.querySelector(".todoList");

// event listeners
submitBtn.addEventListener("click", createTodo);
todoList.addEventListener("click", deleteCheck);

// functions
function createTodo(e) {
  if (input.value === "") {
    return;
  } else {
    e.preventDefault();
    //Create elements for todoItem starting with div
    const item = document.createElement("div");
    item.classList.add("todoItem");
    // create li
    const todo = document.createElement("li");
    todo.innerText = input.value;
    item.append(todo);
    // create buttons
    const completeBtn = document.createElement("button");
    completeBtn.classList.add("completeBtn");
    completeBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash">`;
    item.append(completeBtn, deleteBtn);
    todoList.append(item);
    input.value = "";
  }
}

function deleteCheck(e) {
  const item = e.target.parentElement;
  console.log(item);
  if (e.target.classList.contains("completeBtn")) {
    item.classList.toggle("completed");
  }
}
