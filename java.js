const gridContainer = document.querySelector('#gridContainer')
const btn = document.querySelector('#btn')
const sizeSquare = 520;
const standardSquare = 16;
const result = sizeSquare/standardSquare;

function startingGrid () {
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
}
startingGrid();

let userInput = "";

btn.addEventListener('click', () => {
    userInput = prompt("Type a number between 1 and 100")
    
    let newResult = sizeSquare/userInput;
    if (userInput > 1 && userInput < 100) {
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }
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
        return alert("Please pick a number between 1 and 100");g
    }
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

const rndm = document.querySelector('#rndm')

rndm.addEventListener('click', () => {
    let childGrid = gridContainer.childNodes;
    for(let colorise of childGrid) {
        colorise.addEventListener('mouseover', () => {
            colorise.style.backgroundColor = getRandomColor();
       })
    };
});

const makeBlack = document.querySelector('#makeBlack')

makeBlack.addEventListener('click', () => {
    let childGrid = gridContainer.childNodes;
    for(let blacker of childGrid) {
        blacker.addEventListener('mouseover', () => {
            blacker.style.backgroundColor = 'black';
        })
    };
});

const erase = document.querySelector('#erase')

erase.addEventListener('click', () => {
    let childGrid = gridContainer.childNodes;
    for(let eraser of childGrid) {
        eraser.addEventListener('mouseover', () => {
            eraser.style.backgroundColor = 'white';
       })
    };
});

opacity = opacity + 0.1