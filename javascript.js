// Main task: Create a 16 x 16 grid using for loops.

let container = document.querySelector(".container");

let size = 16;

for (let i = 0; i < size * size ; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
        console.log(square.childElementCount);
}