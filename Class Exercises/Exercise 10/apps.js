console.log("It's working!");

const todos = [];

const input = document.getElementById("todo-input");
const button = document.getElementById("add-button");
const list = document.getElementById("todo-list");

button.addEventListener("click", () => {
    const text = input.value;

    const li = document.createElement("li");
    li.innerHTML = text;

    list.appendChild(li);

    todos.push(text);

    input.value = "";
});