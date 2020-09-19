// console.log("sanity check");
var blackSquare = document.querySelector("div");

document.addEventListener("mousemove", move);

function move(e) {
    blackSquare.style.left = e.clientX - 50 + "px";
    blackSquare.style.top = e.clientY - 50 + "px";
}

// document.removeEventListener("mousemove", move);
