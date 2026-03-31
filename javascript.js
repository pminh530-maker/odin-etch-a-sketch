// Task 1: Create a 16 x 16 grid using for loops.
let container = document.querySelector(".container");

let size = 16;
function createGrid(size) {
        for (let row = 0; row < size; row++) {
                for (let column = 0; column < size; column++) {
                        let square = document.createElement("div");
                        square.classList.add("square");
                        square.style.width = `${960/size}px`;
                        square.style.height = `${960/size}px`;
                        container.appendChild(square);
                        // Task 2: Create a hover effect with addEventListner()
                        square.addEventListener("mouseenter", (e) => {
                                square.style.backgroundColor = "violet";
                        });
                }
        }
}
createGrid(16);

// Task 3: Create a button in the top-left corner.
// When it's clicked, send a popup asking for the number of squares per side for the new grid.
// After receiving the input, REMOVE the existing grid.
// GENERATE a new grid in the same total space as before.
let header = document.createElement("div");
header.classList.add("header");
document.body.prepend(header);

let resetButton = document.createElement("button");
resetButton.classList.add("button");
resetButton.textContent = "Reset";      
resetButton.addEventListener("click", (e) => {
        size = +prompt("How many squares per side?", "16");
        while (size > 100) {
                alert("100 is the maximum!");
                size = +prompt("How many squares per side?", "16");
        };
        container.innerHTML = "";
        createGrid(size);
});
header.appendChild(resetButton);