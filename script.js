var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("button");

function setGradient() {
    body.style.background =
        "linear-gradient(to right," + color1.value +
        ", " + color2.value + ")";
}

function randomNumber() {
    var color1Val = "#" + Math.random().toString(16).slice(2, 8);
    var color2Val = "#" + Math.random().toString(16).slice(2, 8);

    body.style.background =
        "linear-gradient(to right," + color1Val +
        ", " + color2Val + ")";

    color1.value = color1Val;
    color2.value = color2Val;
}
randomNumber()
button.addEventListener("click", randomNumber)
color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
