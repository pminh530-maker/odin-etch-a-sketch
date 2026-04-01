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
                        // Extra credit:
                        // 1. Randomize the squares’ RGB values with each interaction.
                        function getRandomColor() {
                                let value = "0123456789ABCDEF";
                                let color = "#";
                                for (let i = 0; i < 6; i++) {
                                        color += value[Math.floor(Math.random() * 16)]
                                        // We HAVE TO use square brackets here to access the indexed properties of "value".
                                }
                                return color;
                        }
                        // Extra credit:
                        // Implement a progressive darkening effect where each interaction darkens the square by 10%. The goal is to achieve a fully black (or completely colored) square in only ten interactions.
                        function increaseOpacity (square) {
                                let currentOpacity = Number(square.style.opacity);
                                //Number(value) returns 0 if the "value" parameter is absent.
                                if (currentOpacity < 1) {
                                        square.style.opacity = currentOpacity + 0.1;
                                }
                        }
                        square.addEventListener("mouseenter", (e) => {
                                square.style.backgroundColor = getRandomColor();
                                increaseOpacity(square);
                                // Pass the specific square to the function
                        });
                }
        }
}
createGrid(16);

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