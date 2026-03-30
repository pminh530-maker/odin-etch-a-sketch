// Main task: Create a 16 x 16 grid using for loops.

let container = document.querySelector(".container");

for (let row = 0; row < 16; row++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.height = "(960/16)px";
        square.style.width = "(960/16)px";
        container.appendChild(square);
}