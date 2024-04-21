// Globale Variablen
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const tasksContainer = document.getElementById('tasksContainer');

// Event Listener für das Hinzufügen einer neuen Aufgabe
addTaskBtn.addEventListener('click', addTask);

// Funktion zum Hinzufügen einer neuen Aufgabe
function addTask() {
    const taskText = taskInput.value.trim();
   
    if (taskText !== '') {
        // Neues Aufgaben-Element erstellen
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.textContent = taskText;
       
        // Drag-and-Drop-Funktionalität hinzufügen
        taskElement.setAttribute('draggable', 'true');
        taskElement.addEventListener('dragstart', handleDragStart);
       
        // Aufgabe zum Container hinzufügen
        tasksContainer.appendChild(taskElement);
       
        // Ereignislistener für das Löschen einer Aufgabe hinzufügen
        taskElement.addEventListener('click', () => {
            taskElement.remove();
        });
       
        // Eingabefeld leeren
        taskInput.value = '';
    } else {
        alert('Bitte geben Sie eine Aufgabe ein!');
    }
}

// Funktion zum Starten des Ziehens einer Aufgabe
function handleDragStart(event) {
    // Speichere die ID der gezogenen Aufgabe
    event.dataTransfer.setData('text/plain', event.target.textContent);
}

// Event-Listener für das Überqueren des Container-Bereichs während des Ziehens
tasksContainer.addEventListener('dragover', (event) => {
    event.preventDefault(); // Verhindere das Standardverhalten des Browsers
});

// Event-Listener für das Ablegen der Aufgabe in den Container
tasksContainer.addEventListener('drop', (event) => {
    event.preventDefault(); // Verhindere das Standardverhalten des Browsers
   
    // Lese die Daten der gezogenen Aufgabe
    const taskText = event.dataTransfer.getData('text/plain');
   
    // Erstelle ein neues Aufgaben-Element
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.textContent = taskText;
   
    // Füge das neue Aufgaben-Element an der Position des Drops ein
    tasksContainer.insertBefore(taskElement, event.target);
});