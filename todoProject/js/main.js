import { getList } from "./ls.js";
import { addTask, removeTask, changeTask, display } from "./utilities.js";

let toDoList = getList();

const form = document.forms['addItem'];
form.addEventListener('submit', function (e) {addTask(toDoList, e)}, false);

const ol = document.getElementById('toDoList');
ol.addEventListener('click', function(e) {removeTask(toDoList, e)}, false);
ol.addEventListener('click', function(e) {changeTask(toDoList, e)}, false);

let taskFilter = JSON.parse(sessionStorage.getItem("taskFilter"));
const footer = document.getElementsByTagName("footer")[0];
footer.addEventListener('click', (e) => { 
    if(e.target.type == "checkbox"){
        taskFilter = e.target.id;
        sessionStorage.setItem('taskFilter', JSON.stringify(taskFilter));
        window.location.reload();
    }
}, false);

window.onload = () => {
    toDoList = getList();
    display(toDoList, taskFilter);
}

