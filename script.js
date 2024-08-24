function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskInput.value}</span>
        <div>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="undoTask(this)">Undo</button>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
}

function completeTask(button) {
    const li = button.parentElement.parentElement;
    li.classList.add('completed');
}

function undoTask(button) {
    const li = button.parentElement.parentElement;
    li.classList.remove('completed');
}

function editTask(button) {
    const li = button.parentElement.parentElement;
    const taskText = li.querySelector('span').innerText;
    const newTask = prompt('Edit task:', taskText);
    if (newTask !== null) {
        li.querySelector('span').innerText = newTask;
    }
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}
