"user strict";

/*function buyCoffee(name, price, element){
  console.log([name, price, element]);
}

let elem = document.querySelectorAll(".coffee-item");
elem[1].onclick = function() {
  buyCoffee('Американо', 50, this);
}*/
//--------------------------------Планирование-----------------------------------------
// таймаут

/*let timeout = setTimeout(paintBody , 5000, 'aqua');
let changeButton = document.querySelector(".btn");
changeButton.onclick = function() {
  clearTimeout(timeout);
}

function paintBody(color) {
  document.body.style.background = color;
}*/
/*setTimout(function() {
  paintBody('aqua');
}, 5000);*/
/*setTimeout(paintBody , 5000);

function paintBody() {
  document.body.style.background = "crimson";*/

/*let coffeeMachine = document.querySelector('.coffee-machine');
coffeeMachine.style.position = "absolute";*/

/*let interval = setInterval(trashConsole, 1000);

let changeButton = document.querySelector(".btn");
changeButton.onclick = function() {
  clearInterval(interval);
}

function trashConsole() {
  console.log(Math.random());
}*/

//changeBox.append(coin); //Добавляем в конец
  //changeBox.prepend(coin);//------- в начало
  //changeBox.before(coin);//Перед элементом
  //changeBox.after(coin);//После элемента
  //changeBox.replaceWith(coin);//Заменяет элемент
  

//------------------------Навигация по DOM-элементам--------------------------------
/*let coffeeList = document.querySelector('.coffee-list');
//let children = coffeeList.childNodes;
let children = coffeeList.children;
let firstChild = coffeeList.firstElementChild;
let lastChild = coffeeList.lastElementChild;
console.log(children);
console.log(firstChild);
console.log(lastChild);*/

let coffeeItem = document.querySelectorAll('.coffee-item')[1];
let parentDiv = coffeeItem.parentElement.parentElement;
console.log(parentDiv);

let nextSibling = coffeeItem.nextElementSibling;
let previouslSibling = coffeeItem.previousElementSibling;
console.log(nextSibling);
console.log(previouslSibling);




