const input = document.querySelector(".input");
const addButton = document.querySelector(".add");
const tasksContainer = document.querySelector(".tasks-container");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
// renderTasks();
// Render task start--------------

function renderTasks() {
  tasksContainer.innerHTML = "";

  tasks.forEach((taskObj, index) => {
    // create task container----------
    const taskElement = document.createElement("div");
    taskElement.classList.add("task-element");

    const task = document.createElement("p");
    task.classList.add("task-paragraph");
    task.textContent = taskObj.text;

    if (taskObj.completed) {
      task.classList.add("completedTask");
    }

    // create complete button
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";

    // create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    // complete functionality
    completeButton.addEventListener("click", () => {
      taskObj.completed = !taskObj.completed;
      task.classList.add("completedTask");
      console.log(task.className);
      localStorage.setItem("tasks", JSON.stringify(tasks));
     
    });

    // Delete functionality
    deleteButton.addEventListener("click", () => {
      taskElement.remove();
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      
    });

    taskElement.appendChild(task);
    taskElement.appendChild(completeButton);
    taskElement.appendChild(deleteButton);

    tasksContainer.appendChild(taskElement);
  });
}

addButton.addEventListener("click", () => {
  // trim function for removing white space from beginning and end
  const taskText = input.value.trim();
  
  tasks.push({
    text: taskText,
    completed: false,
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));

  renderTasks();

  input.value = "";
});
