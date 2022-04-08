function addlist() {
  var taskname = document.getElementById("taskname").value;
  var todolist = document.getElementById("todolist");
  var todoitem = document.createElement("div");
  var todoeach = document.createElement("li");
  todoeach.innerHTML = taskname;
  var deletebtn = document.createElement("i");
  deletebtn.classList.add("far");
  deletebtn.classList.add("fa-trash-alt");
  if (taskname.length > 0) {
    todoitem.appendChild(todoeach);
    todoitem.appendChild(deletebtn);
    todolist.appendChild(todoitem);
  }
}

const todolist = document.getElementById("todolist");
todolist.addEventListener("click", deleteitem);

function deleteitem(e) {
  var element = e.target;
  if (element.classList[0] === "far") {
    element.parentElement.remove();
  }
}
