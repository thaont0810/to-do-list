let todolist = ['name', 'abc'];
var a = document.getElementById('list');
var b = document.getElementsByClassName('item');
var input = document.getElementById('add');

function load() {
  var innerList = "";

  for (var i = 0; i < todolist.length; i++) {
    innerList += "<li class='item'>" + todolist[i] + "<span class='close'>x</span></li>"
  }

  a.innerHTML = innerList;
}

function add() {
  todolist.push(input.value);
  load();
}
var btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  add();
});

load();

