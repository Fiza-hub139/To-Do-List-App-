function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskValue = taskInput.value;

  if (taskValue === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML =
    taskValue + `<span class="delete" onclick="removeTask(this)">❌</span>`;

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

function removeTask(element) {
  element.parentElement.remove();
}
