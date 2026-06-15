const addButton = document.querySelector('.add');
const input = document.querySelector('.input');

const tasksContainer = document.querySelector('.tasks-container')



 let tasks = [];
renderTasks();

function renderTasks(){
tasksContainer.innerHTML = '';

  tasks.forEach((taskObj, index) => {

  // create task container----------
  const taskElement = document.createElement('div');
  taskElement.classList.add('task-element')

  const task = document.createElement('p');
  task.classList.add('task-paragraph')
  task.textContent = taskObj.text;


  // create complete button
  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';

  


  taskElement.appendChild(task);
  taskElement.appendChild(completeButton);
  tasksContainer.appendChild(taskElement);

  })
}

addButton.addEventListener('click', () => {
  // trim function for removing white space from beginning and end
  const taskText = input.value.trim();
  if(taskText === ''){
    return;
  }
  tasks.push({
    text: taskText,
    completed: false,
  });

  renderTasks();
  
  input.value = '';


})