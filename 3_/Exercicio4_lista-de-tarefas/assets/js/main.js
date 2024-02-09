const inputTask = document.querySelector('.input-task');
const addTaskButton = document.querySelector('.btn-add-task');
const tasks = document.querySelector('.tasks');

addTaskButton.addEventListener('click', function (event) {
    if (!inputTask.value) return;

    addTask(inputTask.value);
    cleanInput();
    saveTasks();
});

inputTask.addEventListener('keypress', (event) => {
    if (!inputTask.value) return;
    if (event.keyCode === 13) {
        addTask(inputTask.value);
        cleanInput();
        saveTasks();
    }
});

document.addEventListener('click', (event) => {
    const element = event.target;
    if (element.className !== 'btn-delete-task') return;
    deleteTask(element.parentElement);
    saveTasks();
});

function cleanInput() {
    inputTask.value = '';
    inputTask.focus();
};

function addTask(textInput) {
    const li = createElement(textInput);
    addButtonDelete(li);
    tasks.appendChild(li);
};

const createElement = (text) => {
    const li = document.createElement('li');
    li.innerHTML = text;
    return li;
};

const addButtonDelete = (element) => {
    const buttonDelete = document.createElement('button');
    buttonDelete.setAttribute('class', 'btn-delete-task');
    buttonDelete.innerHTML = 'Apagar';
    element.append(buttonDelete);
    return element;
};

function deleteTask(element) {
    element.remove();
};

function saveTasks() {
    const tasksElement = tasks.querySelectorAll('li');
    const taskList = [];

    for (let key of tasksElement) {
        taskList.push(key.firstChild.textContent);
    }

    const tasksJSON = JSON.stringify(taskList);

    localStorage.setItem( 'tasks', tasksJSON );
};

 function getTasksStorage() {
    const tasks = localStorage.getItem('tasks');
    const taskList = JSON.parse(tasks);

    for( let task of taskList) {
        addTask(task);
    }
 }

 getTasksStorage();
