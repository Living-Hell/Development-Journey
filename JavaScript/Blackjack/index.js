let nameInput = document.getElementById("input-name");
let chipsInput = document.getElementById("input-chips");

function enterGame() {
  console.log(nameInput.value);
  if (
    nameInput.value === "" ||
    chipsInput.value === "" ||
    isNaN(chipsInput.value)
  ) {
    alert("Please fill in all fields correctly");
    return;
  }
  localStorage.setItem("name", nameInput.value);
  localStorage.setItem("chips", chipsInput.value);
  window.location.href = "./game.html";
}
