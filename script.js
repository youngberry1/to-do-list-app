const input = document.getElementById("taskInput");
const taskBtn = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

taskBtn.addEventListener("click", () => {
  if (input.value.trim() === "") {
    alert("Please, enter a value!");
  } else {
    // Create list item
    let newList = document.createElement("li");
    newList.textContent = input.value;
    newList.className = "newList";

    // ✅ Create check button
    let checkButton = document.createElement("button");
    checkButton.textContent = "✅";
    checkButton.className = "check";

    // ❌ Create delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.className = "delete";

    // Add buttons to the list item
    newList.append(checkButton);
    newList.append(deleteButton);

    // Add list item to the list
    taskList.appendChild(newList);

    // Clear input
    input.value = "";

    // ❌ Delete task
    deleteButton.addEventListener("click", () => {
      newList.remove();
    });

    // ✅ Toggle completed
    checkButton.addEventListener("click", () => {
      newList.classList.toggle("completed");
    });
  }
});
