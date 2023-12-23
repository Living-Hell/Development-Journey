let nameInput = document.getElementById("input-name");
let chipsInput = document.getElementById("input-chips");

function enterGame() {
  console.log(nameInput.value);
  localStorage.setItem("name", nameInput.value);
  localStorage.setItem("chips", chipsInput.value);
}
