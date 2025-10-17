
let userTaskSubmit = document.querySelector("#userTaskSubmit");
let enterTask = document.querySelector("#enterTask");
let userDropDown = document.querySelector("#userDropDown");
let userTime = document.querySelector("#userTime");
let addTaskData = document.querySelector("#addTaskData");
let searchData = document.querySelector("#searchData");
let tableData = document.querySelector("#tableData");
let requireSpan = document.querySelector(".requireSpan");

let arr = [];
let editId = null; 


function renderUser(userTask) {

  tableData.innerHTML = `
        <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Deadline</th>
            <th>Actions</th>
        </tr>
    `;

  userTask.forEach((element) => {
    let { id, task, status, deadline } = element;

    let newRow = document.createElement("tr");

    newRow.innerHTML = `
            <td>${task}</td>
            <td>${status}</td>
            <td>${deadline}</td>
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


  if (!enterTask.value || !userDropDown.value || !userTime.value) {
    requireSpan.style.display = 'block'
    return;
  }

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
