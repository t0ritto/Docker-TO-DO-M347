const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const tasksContainer = document.getElementById('tasksContainer');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
   
    if (taskText !== '') {

        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.textContent = taskText;
       
        taskElement.setAttribute('draggable', 'true');
        taskElement.addEventListener('dragstart', handleDragStart);
       
        tasksContainer.appendChild(taskElement);
       
        taskElement.addEventListener('click', () => {
            taskElement.remove();
        });
       
        taskInput.value = '';
    } else {
        alert('Bitte geben Sie eine Aufgabe ein!');
    }
}


function handleDragStart(event) {

    event.dataTransfer.setData('text/plain', event.target.textContent);
}


tasksContainer.addEventListener('dragover', (event) => {
    event.preventDefault(); 
});


tasksContainer.addEventListener('drop', (event) => {
    event.preventDefault(); 
   
    const taskText = event.dataTransfer.getData('text/plain');
   
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.textContent = taskText;
   
    tasksContainer.insertBefore(taskElement, event.target);
});