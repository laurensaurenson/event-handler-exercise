var body = document.body;
var header = document.getElementById("page-header");
var guineaPig = document.getElementById("guinea-pig");
var addColor = document.getElementById("add-color");
var hulkify = document.getElementById("make-large");
var capture = document.getElementById("add-border");
var rounded = document.getElementById("add-rounding");

body.addEventListener("click", inform);
header.addEventListener("mouseover", headerInfo);
header.addEventListener("mouseout", headerBye);
addColor.addEventListener("click", color); 
hulkify.addEventListener("click", makeLarge);
capture.addEventListener("click", addBorder);
rounded.addEventListener("click", makeRound);

function inform () {
  console.log( `You clicked on the ${event.target.innerHTML} section` );
}

function headerInfo () {
  console.log("You moved your mouse over the header");
}

function headerBye () {
  console.log("You left me ;(");
}

function color () {
  guineaPig.classList.add("add-color");
}

function makeLarge () {
  guineaPig.classList.add("make-large");
}

function addBorder () {
  guineaPig.classList.add("add-border");
}

function makeRound () {
  guineaPig.classList.add("add-rounding");
}