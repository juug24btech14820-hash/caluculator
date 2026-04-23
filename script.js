window.onload = function () {
    loadTasks();
    updateCount();
};

function addTask() {
    let input = document.getElementById("taskInput");
    let message = document.getElementById("message");
    let task = input.value.trim();

    if (task === "") {
        message.innerText = "Command required!";
        return;
    }

    message.innerText = "";

    let li = document.createElement("li");

    li.innerHTML = `
    <span>> ${task}</span>
    <div>
        <button onclick='completeTask(this)'>✔</button>
        <button onclick='deleteTask(this)'>✖</button>
    </div>
    `;

    document.getElementById("taskList").appendChild(li);

    saveTasks();
    updateCount();
    input.value = "";
}

function completeTask(btn) {
    btn.parentElement.parentElement.classList.toggle("completed");
    saveTasks();
}

function deleteTask(btn) {
    btn.parentElement.parentElement.remove();
    saveTasks();
    updateCount();
}

function clearAll() {
    document.getElementById("taskList").innerHTML = "";
    localStorage.removeItem("tasks");
    updateCount();
}

function saveTasks() {
    let tasks = document.getElementById("taskList").innerHTML;
    localStorage.setItem("tasks", tasks);
}

function loadTasks() {
    let saved = localStorage.getItem("tasks");
    if (saved) {
        document.getElementById("taskList").innerHTML = saved;
    }
}

function updateCount() {
    let count = document.getElementById("taskList").children.length;
    document.getElementById("count").innerText = count + " Logs";
}