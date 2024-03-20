const gridContainer = document.querySelector('#gridContainer')


function addGrid() {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add('gridSquare');
    gridContainer.appendChild(gridDiv);
}


for(let i = 0; i < 256; i++) {
    addGrid();
}

