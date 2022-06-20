var number = document.querySelector("#numb");
var counter = 0;

function plusCounter(){
  counter = counter + 1;
  number.textContent = counter;
}
function reset(){
  counter = 0;
  number.textContent = counter;
}
