document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form submission

      // Get the task description from the input field
      const taskDescription = document.getElementById("new-task-description").value;

      if (taskDescription) {
          // Create a new task list item
          const taskItem = document.createElement("li");
          taskItem.textContent = taskDescription;

          const btn =document.createElement("button")
          btn.textContent = "X"

          // Append the task to the task list
          taskList.appendChild(taskItem);
          taskList.appendChild(btn);


          // Clear the input field
          document.getElementById("new-task-description").value = "";
        }
      });
    
      // Add a click event listener to the taskList to handle deletions
      taskList.addEventListener("click", function (e) {
        if (e.target && e.target.nodeName === "BUTTON") {
          // Remove the task item and its associated delete button
          const taskItem = e.target.previousSibling;
          taskList.removeChild(e.target);
          if (taskItem) {
            taskList.removeChild(taskItem);
          }
        }
      });
  });