let taskList = [];

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskListElement = document.getElementById("taskList");

  if (taskInput.value !== "") {
    taskList.push({ text: taskInput.value, completed: false });

    let taskIndex = taskList.length - 1;
    let newTaskElement = document.createElement("li");
    newTaskElement.innerHTML = `
			<input type="checkbox" id="task_${taskIndex}" onchange="updateTaskStatus(${taskIndex})">
			<span class="taskText">${taskList[taskIndex].text}</span>
		`;
    taskListElement.appendChild(newTaskElement);

    taskInput.value = "";
  }
}

function updateTaskStatus(taskIndex) {
  taskList[taskIndex].completed = document.getElementById(`task_${taskIndex}`).checked;
}

function showAll() {
  let taskListElement = document.getElementById("taskList");

  taskListElement.innerHTML = "";

  taskList.forEach((task, index) => {
    let newTaskElement = document.createElement("li");
    newTaskElement.innerHTML = `
			<input type="checkbox" id="task_${index}" onchange="updateTaskStatus(${index})" ${task.completed ? "checked" : ""}>
			<span class="taskText ${task.completed ? "completed" : ""}">${task.text}</span>
		`;
    taskListElement.appendChild(newTaskElement);
  });
}

function showCompleted() {
  let taskListElement = document.getElementById("taskList");

  taskListElement.innerHTML = "";

  taskList.forEach((task, index) => {
    if (task.completed) {
      let newTaskElement = document.createElement("li");
      newTaskElement.innerHTML = `
				<input type="checkbox" id="task_${index}" onchange="updateTaskStatus(${index})" checked>
				<span class="taskText completed">${task.text}</span>
			`;
      taskListElement.appendChild(newTaskElement);
    }
  });
}

function showPending() {
  let taskListElement = document.getElementById("taskList");

  taskListElement.innerHTML = "";

  taskList.forEach((task, index) => {
    if (!task.completed) {
      let newTaskElement = document.createElement("li");
      newTaskElement.innerHTML = `
				<input type="checkbox" id="task_${index}" onchange="updateTaskStatus(${index})">
				<span class="taskText">${task.text}</span>
			`;
      taskListElement.appendChild(newTaskElement);
    }
  });
}

document.getElementById("showAllButton").click();  // Show all tasks by default
