let x = document.getElementById("buton");
let click = 0;
function changeColor() {
    x.onclick = function() {
        if (click == 0) {
            x.style.background = "yellow";
            click = 1;
        } else if (click == 1) {
            x.style.background = "green";
            click = 2;
        } else {
            x.style.background = "red";
            click = 0;
        }
    }
}
changeColor();
window.setInterval(function() {
    x.onclick();
}, 10000);
