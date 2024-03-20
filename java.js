const gridContainer = document.querySelector('#gridContainer')
const sizeSquare = 520;
let userInput = 2;
let result = sizeSquare/userInput;


function addGrid() {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add('gridSquare');
    gridDiv.setAttribute(`style`, `width: ${result}px; height: ${result}px`);
    gridContainer.appendChild(gridDiv);
}

for(let i = 0; i < userInput*userInput; i++) {
     addGrid();
}
