let perRowBoxes = 16;
const nRowsButton = document.getElementById("nRowsButton");
const container = document.getElementById("container");
const h2 = document.getElementsByTagName("h2").item(0);

function makeGrid(perRowBoxes) {
  container.innerHTML = "";
  if (between(perRowBoxes, 0, 100))
    h2.textContent = "Change number of pixels in grid (" + perRowBoxes + " x " + perRowBoxes + ")";
  const boxSize = 100 / perRowBoxes; //get percentage of box width and height
  for (let i = 0; i < perRowBoxes; i++) {
    for (let j = 0; j < perRowBoxes; j++) {
      const div = document.createElement("div");
      div.style.width = boxSize + "%";
      div.style.height = boxSize + "%";
      container.appendChild(div);
      div.addEventListener("mouseover", changeColor);
    }
  }
}

function changeColor(event) {
  event.target.style.backgroundColor = "black";
}

nRowsButton.addEventListener("click", setNewGrid);

function setNewGrid(event) {
  perRowBoxes = parseInt(prompt("how many boxes should be in the grid (choose a number under 100)"));
  console.log("typeof x = " + typeof perRowBoxes);
  console.log("value x = " + perRowBoxes);
  if (typeof perRowBoxes === "number" && between(perRowBoxes, 0, 100)) {
    container.innerHTML = "";
    makeGrid(perRowBoxes);
  } else {
    alert("please enter a number between 1 and 99");
    makeGrid(0);
  }
}

function between(x, min, max) {
  return x > min && x < max;
}

makeGrid(perRowBoxes);
