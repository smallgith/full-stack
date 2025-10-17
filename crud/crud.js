const userTaskSubmit = document.querySelector("#userTaskSubmit");
const enterTask = document.querySelector("#enterTask");
const userDropDown = document.querySelector("#userDropDown");
const userTime = document.querySelector("#userTime");
const addTaskData = document.querySelector("#addTaskData");
const searchData = document.querySelector("#searchData");
const tableData = document.querySelector("#tableData");
const requireSpan1 = document.querySelector(".requireSpan1");
const requireSpan2 = document.querySelector(".requireSpan2");
const requireSpan3 = document.querySelector(".requireSpan3");

let arr = [];
let editId = null;
let sortAscending = true;

// Format datetime for display
function formatDateTime(dateStr) {
  const dateObj = new Date(dateStr);
  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const year = dateObj.getFullYear();
  const hours = String(dateObj.getHours()).padStart(2, "0");
  const minutes = String(dateObj.getMinutes()).padStart(2, "0");
  return `${day}-${month}-${year}, ${hours}:${minutes}`;
}

// Render tasks in table
function renderUser(userTask) {
  tableData.innerHTML = `
    <tr>
        <th>Task</th>
        <th>Status</th>
        <th>Deadline</th>
        <th>Actions</th>
    </tr>
  `;

  userTask
    .sort((a, b) =>
      sortAscending
        ? new Date(a.deadline) - new Date(b.deadline)
        : new Date(b.deadline) - new Date(a.deadline)
    )
    .forEach(({ id, task, status, deadline }) => {
      const formattedDeadline = formatDateTime(deadline);
      const newRow = document.createElement("tr");

      newRow.innerHTML = `
        <td>${task}</td>
        <td>${status}</td>
        <td>${formattedDeadline}</td>
        <td></td>
      `;

      const editBtn = document.createElement("button");
      editBtn.className = "editButton";
      editBtn.textContent = "Edit";
      editBtn.addEventListener("click", () => editTask(id));

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "deleteButton";
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => deleteTask(id));

      newRow.children[3].append(editBtn, deleteBtn);
      tableData.appendChild(newRow);
    });
}

// Form submit handler
function formSubmitBtn(e) {
  e.preventDefault();

  requireSpan1.style.display = "none";
  requireSpan2.style.display = "none";
  requireSpan3.style.display = "none";

  let isValid = true;

  if (!enterTask.value) {
    requireSpan1.style.display = "block";
    isValid = false;
  }
  if (!userDropDown.value) {
    requireSpan2.style.display = "block";
    isValid = false;
  }
  if (!userTime.value) {
    requireSpan3.style.display = "block";
    isValid = false;
  }
  if (!isValid) return;

  if (editId) {
    arr = arr.map((task) =>
      task.id === editId
        ? {
            ...task,
            task: enterTask.value,
            status: userDropDown.value,
            deadline: userTime.value,
          }
        : task
    );
    editId = null;
    addTaskData.textContent = "Add Task";
  } else {
    arr.push({
      id: Date.now(),
      task: enterTask.value,
      status: userDropDown.value,
      deadline: userTime.value,
    });
  }

  userTaskSubmit.reset();
  renderUser(arr);
}

// Edit task
function editTask(id) {
  const taskToEdit = arr.find((task) => task.id === id);
  enterTask.value = taskToEdit.task;
  userDropDown.value = taskToEdit.status;
  userTime.value = taskToEdit.deadline;
  editId = id;
  addTaskData.textContent = "Update Task";
}

// Delete task
function deleteTask(id) {
  arr = arr.filter((task) => task.id !== id);
  renderUser(arr);
}

// Search functionality
searchData.addEventListener("input", (e) => {
  const filter = e.target.value.toLowerCase();
  const filteredArr = arr.filter((task) =>
    task.task.toLowerCase().includes(filter)
  );
  renderUser(filteredArr);
});

// Event listener for submit button
addTaskData.addEventListener("click", formSubmitBtn);

// Initial render
renderUser(arr);
