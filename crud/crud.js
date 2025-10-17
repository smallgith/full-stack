let userTaskSubmit = document.querySelector("#userTaskSubmit");
let enterTask = document.querySelector("#enterTask");
let userDropDown = document.querySelector("#userDropDown");
let userTime = document.querySelector("#userTime");
let addTaskData = document.querySelector("#addTaskData");
let searchData = document.querySelector("#searchData");
let tableData = document.querySelector("#tableData");
let requireSpan1 = document.querySelector(".requireSpan1");
let requireSpan2 = document.querySelector(".requireSpan2");
let requireSpan3 = document.querySelector(".requireSpan3");



let arr = [];
let editId = null;
let sortAscending = true; 


function formatDateTime(dateStr) {
  let dateObj = new Date(dateStr);
  let day = String(dateObj.getDate()).padStart(2, "0");
  let month = String(dateObj.getMonth() + 1).padStart(2, "0");
  let year = dateObj.getFullYear();
  let hours = String(dateObj.getHours()).padStart(2, "0");
  let minutes = String(dateObj.getMinutes()).padStart(2, "0");
  return `${day}-${month}-${year}, ${hours}:${minutes}`;
}

function renderUser(userTask) {
  tableData.innerHTML = `
        <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Deadline</th>
            <th>Actions</th>
        </tr>
    `;


  userTask.sort((a, b) => {
    return sortAscending
      ? new Date(a.deadline) - new Date(b.deadline)
      : new Date(b.deadline) - new Date(a.deadline);
  });

  userTask.forEach((element) => {
    let { id, task, status, deadline } = element;

    let formattedDeadline = formatDateTime(deadline);

    let newRow = document.createElement("tr");

    newRow.innerHTML = `
            <td>${task}</td>
            <td>${status}</td>
            <td>${formattedDeadline}</td>
            <td></td>
        `;

    let editBtn = document.createElement("button");
    editBtn.className = "editButton";
    editBtn.innerText = "Edit";
    editBtn.addEventListener("click", () => editTask(id));

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteButton";
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", () => deleteTask(id));

    newRow.children[3].append(editBtn, deleteBtn);
    tableData.appendChild(newRow);
  });
}

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
    arr = arr.map((task) => {
      if (task.id === editId) {
        return {
          ...task,
          task: enterTask.value,
          status: userDropDown.value,
          deadline: userTime.value,
        };
      }
      return task;
    });
    editId = null;
    addTaskData.innerText = "Add Task";
  } else {
    let obj = {
      id: Date.now(),
      task: enterTask.value,
      status: userDropDown.value,
      deadline: userTime.value,
    };
    arr.push(obj);
  }

  userTaskSubmit.reset();
  renderUser(arr);
}

function editTask(id) {
  let taskToEdit = arr.find((task) => task.id === id);
  enterTask.value = taskToEdit.task;
  userDropDown.value = taskToEdit.status;
  userTime.value = taskToEdit.deadline;
  editId = id;
  addTaskData.innerText = "Update Task";
}

function deleteTask(id) {
  arr = arr.filter((task) => task.id !== id);
  renderUser(arr);
}

searchData.addEventListener("input", (e) => {
  let filter = e.target.value.toLowerCase();
  let filteredArr = arr.filter((task) =>
    task.task.toLowerCase().includes(filter)
  );
  renderUser(filteredArr);
});

addTaskData.addEventListener("click", formSubmitBtn);



renderUser(arr);
