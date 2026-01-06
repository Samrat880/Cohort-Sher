let main = document.getElementById("main");
let mouse = document.getElementById("img");

main.addEventListener('mousemove', function (e) {
    let x = e.clientX;
    let y = e.clientY;
    mouse.style.left = x + "px";
    mouse.style.top = y + "px";
}
)



