const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteBtn(event){
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function doneTodo(event){
    event.target.classList.toggle("done");
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    li.addEventListener("click", doneTodo);

    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText="X"
    button.setAttribute('class','btnDelete');
    button.addEventListener("click", deleteBtn);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);

}


function handleTodoSubmit(event){
    event.preventDefault(event);
    const newTodo = todoInput.value;
    todoInput.value="";
    const newToDoObj = {
        text:newTodo,
        id:Date.now(),
    }
    toDos.push(newToDoObj);
    paintTodo(newToDoObj);
    saveToDos();

}

todoForm.addEventListener("submit", handleTodoSubmit);

const SavedToDos = localStorage.getItem(TODOS_KEY);

if(SavedToDos){
    const parsedToDos = JSON.parse(SavedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}
