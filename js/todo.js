const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){    
    const li = event.currentTarget.parentElement;   
    // console.log(event.target.parentElement.innerText);
    // console.log(li);
    li.remove();    
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    const icon = document.createElement("i");
    // icon.setAttribute("class", "fas fa-trash-alt fa-xl"); 
    // icon.setAttribute("class", "far fa-trash-alt fa-xl"); 
    // icon.setAttribute("class", "fas fa-trash fa-xl"); 
    // icon.setAttribute("class", "fas fa-times fa-xl"); 
    icon.setAttribute("class", "fas fa-window-close"); 

    li.id = newTodo.id;
    span.innerText = newTodo.text;
    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);     
    button.append(icon);    
    button.addEventListener("click", deleteToDo);

}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {text: newTodo, id: Date.now(), };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}