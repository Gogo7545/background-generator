var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementsByTagName("button")[0];

function setGradient(){
    body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }

function generateRandomColors (){
    color1 = randomColor();
    color2 = randomColor();
    body.style.background =
    "linear-gradient(to right, " + color1 + ", " + color2 + ")";
    css.textContent = body.style.background + ";";
}

button.addEventListener("click", generateRandomColors);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

setGradient();