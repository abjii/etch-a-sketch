let perRowBoxes = 16;
const nRowsButton = document.getElementById("nRowsButton");
const container = document.getElementById("container");

function makeGrid(perRowBoxes) {
  const boxSize = 100 / perRowBoxes; //percentage of box width and height
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

makeGrid(perRowBoxes);

nRowsButton.addEventListener("click", () => {
  let x = parseInt(prompt("how many boxes should be in the grid (choose a number under 100)"));
  console.log("typeof x " + typeof x);
  console.log(" x =  " + x);
  if (typeof x === "number" && x < 100) {
    container.innerHTML = ""; // to improve for security reasons maybe !!
    makeGrid(x);
  } else {
    console.log(x + "not nmber");
  }
});
