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

let interval = setInterval(trashConsole, 1000);

let changeButton = document.querySelector(".btn");
changeButton.onclick = function() {
  clearInterval(interval);
}

function trashConsole() {
  console.log(Math.random());
}





