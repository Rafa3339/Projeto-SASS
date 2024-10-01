document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
    const themeSelector = document.getElementById("theme");
  
    // Adicionar tarefa
    addTaskBtn.addEventListener("click", function () {
      if (taskInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.classList.add("task");
        li.innerHTML = `
          <span>${taskInput.value}</span>
          <button class="complete-btn">✔️</button>
          <button class="delete-btn">❌</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
      }
    });
  
    // Marcar como concluída ou remover tarefa
    taskList.addEventListener("click", function (e) {
      if (e.target.classList.contains("complete-btn")) {
        e.target.parentElement.classList.toggle("completed");
      } else if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
      }
    });
  
    // Alternar entre temas
    themeSelector.addEventListener("change", function () {
      document.body.className = this.value;
    });
  });
  