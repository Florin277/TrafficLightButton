const TEN_SECONDS_MS = 10000;
const buttonColors = document.getElementById("myButton");
const colors = ["yellow", "green", "red"];

function changeColor() {
    let click = 0;
    buttonColors.addEventListener('click', () =>  {
        buttonColors.style.background = colors[click % 3];
        ++click;
    })
}

changeColor();

setInterval(function() {
    buttonColors.click();
}, TEN_SECONDS_MS);
