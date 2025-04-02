let x = document.getElementById("buton"), click = 0;
const seconds = 10000;
let colors = ["yellow", "green", "red"];
function changeColor() {
    x.onclick = function() {
        x.style.background = colors[click % 3];
        ++click;
    }
}
changeColor();
window.setInterval(function() {
    x.onclick();
}, seconds);
