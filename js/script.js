let taskInput = document.getElementById('addtask');
let addTaskBtn = document.getElementById('addtaskBtn');
let taskList = document.getElementById('task-list');



addTaskBtn.addEventListener('click', () => {
    task = taskInput.value

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement('li')
    li.textContent = `${task}`;
    li.className = "list-group-item d-flex justify-content-between align-items-center";


    taskList.addEventListener("click", function (e) {
        e.target.classList.toggle('strike');
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn btn-danger btn-sm";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    

    taskList.appendChild(li);
    li.appendChild(deleteBtn);
    taskInput.value = "";


});