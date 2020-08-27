let container = document.getElementById("container");
let gridElements = document.getElementsByClassName("gridProp");
let btnDiv = document.getElementById("btnDiv");
let frameNum;

function createGrid() {

    frameNum = prompt("How many squares per side of the grid? ");

    for (i=0; i < setGridSize(frameNum); i++) {

        let makeDiv = document.createElement("div");
        makeDiv.classList.add("gridProp");
        container.appendChild(makeDiv);

    };

    setGridStruc();

}

function etchElements() {

    for (i=0; i < gridElements.length; i++) {

        let e = gridElements[i];

        e.addEventListener(("mouseover"), () => {

            e.classList.add("rolledOver");

        });

    };

}

function resetSketch() {

    btnDiv.addEventListener(("click"), ()=> {

        container.innerHTML = '';

        createGrid();
        etchElements();
        
    });

}

function setGridSize(frameNum) {

    frameNum = (frameNum * frameNum);
    return frameNum;

}

function setGridStruc() {

    container.setAttribute("style", `grid-template-columns: repeat(${frameNum}, auto)`);

    for (i=0; i < gridElements.length; i++) {

        let e = gridElements[i];

        e.style.height = `${500/frameNum}px`;
        e.style.width = `${500/frameNum}px`;
    };

}

createGrid();
etchElements();
resetSketch();


