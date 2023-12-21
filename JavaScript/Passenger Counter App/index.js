// document.getElementById("count-el").innerText = 40;

let counter = 0;
let currCount = document.getElementById("count-el");
let entries = document.getElementById("entries");

function increment() {
  // console.log("The button was clicked!");
  counter++;
  currCount.textContent = counter;
}

function save() {
  // console.log("The save button was clicked");
  entries.textContent += counter + " - ";
  currCount.textContent = 0;
  counter = 0;
}

function clearEntries() {
  //   console.log("Clear was pressed");
  entries.textContent = "";
}
