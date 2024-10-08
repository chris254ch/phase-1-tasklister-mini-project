document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
// Select the form and the task list
const form = document.getElementById('create-task-form');
const taskList = document.getElementById('tasks');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the value from the input field
    const taskDescription = document.getElementById('new-task-description').value;

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = taskDescription;

    // Append the new list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    form.reset();
});