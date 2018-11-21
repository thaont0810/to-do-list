let todolist = ['task1', 'task2'];
var ul = document.getElementById('list');
var li = document.getElementsByClassName('item');
var add = document.getElementById('add');
var input = document.getElementsByClassName('input');

function load() {
  if(!localStorage.getItem('todos')) {
    localStorage.setItem('todos', JSON.stringify(todolist));
  }
  todolist = JSON.parse(localStorage.getItem('todos'));
  var innerList = "";
  for (var i = 0; i < todolist.length; i++) {
    innerList += "<li class='item'>" 
    + "<input class = 'input' onblur = 'save(" +i+ ")' type = 'text' disabled='disabled' value = '" + todolist[i]+"'>" 
    + "<span class='edit' onclick = 'edit(" +i+ ")'>Edit</span>" 
    + "<span class='close' onclick ='remove(" +i+ ")'>x</span></li>"
  }
  ul.innerHTML = innerList;
}

function addTask() {
  if (add.value) {
    todolist.push(add.value);
    localStorage.setItem('todos', JSON.stringify(todolist));
  }
  load();
}

function remove(i) {
  todolist.splice(i, 1);
  localStorage.setItem('todos', JSON.stringify(todolist));
  load();
};

function edit(i) {
  input[i].removeAttribute('disabled');
  input[i].focus();
}

function save(i) {
  todolist[i] = input[i].value;
  localStorage.setItem('todos', JSON.stringify(todolist));
  load();
}

load();

