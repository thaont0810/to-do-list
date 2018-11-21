let todolist = ['task1', 'task2'];
let ul = document.getElementById('list');
let li = document.getElementsByClassName('item');
let add = document.getElementById('add');
let input = document.getElementsByClassName('input');

function load() {
  var data = localStorage.getItem("todos");;
  if (!data) {
    localStorage.setItem("todos", JSON.stringify(todolist));
  }
  todolist = JSON.parse(data);
  let innerList = '';
  for (var i = 0; i < todolist.length; i++) {
    innerList += "<li class='item'>" +
      "<input class = 'input' onblur = 'saveTask(" + i + ")' disabled = 'disabled' value = '" +  todolist[i] +"'>" +
        "<div class = 'method'><span class = 'edit' onclick = 'editTask(" + i + ")'>Edit</span>" +
          "<span class = 'close' onclick = 'removeTask(" + i + ")'>x</span></div></li>";
  }
  ul.innerHTML = innerList;
}

function addTask() {
  if (add.value) {
    todolist.push(add.value);
    localStorage.setItem("todos", JSON.stringify(todolist));
  }
  load();
}

function editTask(i) {
  input[i].removeAttribute('disabled');
  input[i].focus();
}

function removeTask(i) {
  todolist.splice(i, 1);
  localStorage.setItem("todos", JSON.stringify(todolist));
  load();
}

function saveTask(i) {
  todolist[i] = input[i].value;
  localStorage.setItem("todos", JSON.stringify(todolist));
  load();
}

load();