const gridContainer = document.querySelector('#gridContainer')
const btn = document.querySelector('#btn')
const sizeSquare = 520;
const standardSquare = 16;
const result = sizeSquare/standardSquare;


for(let i = 0; i < standardSquare**2 ; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add('gridSquare');
    gridDiv.setAttribute(`style`, `width: ${result}px; height: ${result}px`);
    gridContainer.appendChild(gridDiv);
    const hovering = document.querySelectorAll('.gridSquare');
    hovering[i].addEventListener('mouseover', () => {
        hovering[i].setAttribute('class', 'gridHover')
    });
}

let userInput = "";

btn.addEventListener('click', () => {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    userInput = prompt("Type a number between 1 and 100")
    let newResult = sizeSquare/userInput;
    if (userInput > 1 || userInput < 100) {
        for(let i = 0; i < userInput**2 ; i++) {
            const gridDiv = document.createElement("div");
            gridDiv.classList.add('gridSquare');
            gridDiv.setAttribute(`style`, `width: ${newResult}px; height: ${newResult}px`);
            gridContainer.appendChild(gridDiv);
            const hovering = document.querySelectorAll('.gridSquare');
            hovering[i].addEventListener('mouseover', () => {
                hovering[i].setAttribute('class', 'gridHover')
            });
        }
    } else {
        alert("Please enter a Number between 1 and 100")
    }
});