let buttonColors = document.getElementById("myButton");
let click = 0;
const TENSECONDS_MS = 10000;
const colors = ["yellow", "green", "red"];

function changeColor() {
    buttonColors.addEventListener('click', () =>  {
        buttonColors.style.background = colors[click % 3];
        ++click;
    })
}

changeColor();

setInterval(function() {
    buttonColors.click();
}, TENSECONDS_MS);
