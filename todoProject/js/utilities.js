import { saveList } from "./ls.js";
import ToDo from "./ToDos.js";

/*********************************************************************
 * Internal functions
 *********************************************************************/

 function filterTasks(toDoList, completed){
    let newList = [];
    switch(completed){
        case 'Completed':
            uncheckFilters();
            document.getElementById('Completed').checked = true;

            newList = toDoList.filter((task) => task.completed);
            document.getElementById('numTasks').innerHTML = `${newList.length} tasks completed`;
            return newList;
        case 'Active':
            uncheckFilters();
            document.getElementById('Active').checked = true;

            newList = toDoList.filter((task) => !task.completed);
            document.getElementById('numTasks').innerHTML = `${newList.length} tasks left`;
            return newList;
        default:
            document.getElementById('numTasks').innerHTML = `${toDoList.length} total tasks`;
            return toDoList;
    }
}

function uncheckFilters(){
    document.getElementById('All').checked = false;
    document.getElementById('Active').checked = false;
    document.getElementById('Completed').checked = false;
}

function changeCompleted(toDo){
    toDo.completed ? toDo.completed = false : toDo.completed = true;
}

function formatToDo(toDo) {
    const listItem = document.createElement("li");

    const labelItem = document.createElement("label");
    labelItem.classList.add('container');
    labelItem.setAttribute('data-id', `${toDo.id}`);
    labelItem.innerHTML = toDo.content;

    const inputItem = document.createElement("input");
    inputItem.type = 'checkbox';
    inputItem.checked = toDo.completed;

    const spanItem = document.createElement("span");
    spanItem.classList.add("checkmark");

    const buttonItem = document.createElement("button");
    buttonItem.classList.add("button");
    buttonItem.id = "remove";
    buttonItem.innerHTML = "X";

    labelItem.appendChild(inputItem);
    labelItem.appendChild(spanItem);
    labelItem.appendChild(buttonItem);

    listItem.appendChild(labelItem);

    return listItem;
}

/*********************************************************************
 * Exported functions
 *********************************************************************/

function createDefaultList() {
    let defaultList = [];

    const one = new ToDo();
    const two = new ToDo();
    const three = new ToDo();

    one.setContent('Get Eggs');
    two.setContent('Pickup Dry Cleaning');
    three.setContent('Get Gas');

    defaultList.push(one);
    defaultList.push(two);
    defaultList.push(three);

    return defaultList;
}

function addTask(toDoList, e) {
    e.preventDefault();

    const input = e.target.newToDo;

    const newTask = new ToDo();
    newTask.setContent(input.value);

    toDoList.push(newTask);
    saveList(toDoList);

    window.location.reload();
}

function changeTask(toDoList, e) {
    if(e.target.type == 'checkbox'){
        const changeID = e.target.parentElement.getAttribute("data-id");
        toDoList.find((task) => task.id == changeID ? changeCompleted(task) : false);
        saveList(toDoList);

        window.location.reload();
    }
}

function removeTask(toDoList, e){
    if(e.target.id == 'remove'){
        const removeID = e.target.parentElement.getAttribute("data-id");
        const newList = toDoList.filter((task) => task.id != removeID);
        saveList(newList);

        window.location.reload();
    }
}

function display(toDoList, taskFilter) {
    let filteredList = [];
    filteredList = filterTasks(toDoList, taskFilter)
    
    filteredList.forEach( (item) => document.getElementById('toDoList').appendChild(formatToDo(item)) );
}

export {createDefaultList, addTask, changeTask, removeTask, display}