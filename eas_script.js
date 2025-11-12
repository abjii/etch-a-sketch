// ====== GLOBAL VARIABLES ======
let perRowBoxes = 16;
let mouseDown = false;
const nRowsButton = document.getElementById("nRowsButton");
const container = document.getElementById("container");
const h2 = document.getElementsByTagName("h2").item(0);
const h3 = document.getElementsByTagName("h3").item(0);

// ====== EVENT DECLARATION ======
nRowsButton.addEventListener("click", setNewGrid);
document.addEventListener("mousedown", () => {
  mouseDown = true;
});
document.addEventListener("mouseup", () => {
  mouseDown = false;
  console.log("mouseDown = false;");
});

// ====== FUNCTION DECLARATION ======
function makeGrid(perRowBoxes) {
  container.innerHTML = "";
  if (between(perRowBoxes, 0, 100)) {
    h2.textContent = "Change number of pixels in grid";
    h3.textContent = `(${perRowBoxes} x ${perRowBoxes})`;
  }
  const boxSize = 100 / perRowBoxes; // percentage width/height of each box
  for (let i = 0; i < perRowBoxes; i++) {
    for (let j = 0; j < perRowBoxes; j++) {
      const div = document.createElement("div");
      div.style.width = boxSize + "%";
      div.style.height = boxSize + "%";
      div.addEventListener("mousedown", changeColor);
      div.addEventListener("mouseover", hoverColor);
      container.appendChild(div);
    }
  }
}

function changeColor(event) {
  event.target.style.backgroundColor = "black";
  console.log("mouse down so colouring");
}

function hoverColor(event) {
  if (mouseDown) {
    event.target.style.backgroundColor = "black";
  }
}

function setNewGrid() {
  perRowBoxes = parseInt(prompt("How many boxes should be in the grid (choose a number under 100)"));
  if (typeof perRowBoxes === "number" && between(perRowBoxes, 0, 100)) {
    makeGrid(perRowBoxes);
  } else {
    alert("Please enter a number between 1 and 99");
    makeGrid(0);
  }
}

function between(x, min, max) {
  return x > min && x < max;
}

// ====== CALLS ======
makeGrid(perRowBoxes);
