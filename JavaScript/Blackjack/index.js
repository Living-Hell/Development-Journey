let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let newCardBtn = document.getElementById("new-card-btn");
let playerEl = document.getElementById("player-el");

let player = {
  name: "Shushant",
  chips: "102",
};

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let card = Math.floor(Math.random() * 13) + 1;
  if (card === 1) card = 11;
  else if (card > 10) card = 10;
  return card;
}

function startGame() {
  if (isAlive === false || hasBlackjack === true) {
    isAlive = true;
    hasBlackjack = false;
    newCardBtn.style.cursor = "pointer";
  }
  let card1 = getRandomCard();
  let card2 = getRandomCard();
  cards = [card1, card2];
  sum = card1 + card2;
  renderGame();
}

function renderGame() {
  // console.log(message);
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + "  ";
  }
  if (sum <= 20) {
    message = "Do you want to draw more?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackjack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  // console.log("New game will be started!");
  if (isAlive === true && hasBlackjack === false) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
  } else {
    newCardBtn.style.cursor = "not-allowed";
  }
}
