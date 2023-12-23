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
let startBtn = document.getElementById("start-btn");
let cardsURL = [];
let zeroPoints = false;
let name = localStorage.getItem("name");
let chips = localStorage.getItem("chips");

async function fetchCards() {
  try {
    const response = await fetch("cards.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cards:", error);
    return null;
  }
}

let player = {
  name: name,
  chips: chips,
};

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let card = Math.floor(Math.random() * 13) + 1;
  if (card === 1) card = 11;
  else if (card > 10) card = 10;
  let i = card - 2;
  let j = Math.floor(Math.random() * cardsURL[i].length);
  //   console.log(i, j);
  // cardsURL[i].splice(j, 1);
  return [cardsURL[i][j], card];
}

async function startGame() {
  if (zeroPoints === true) return;

  cardsURL = await fetchCards();

  if (isAlive === false || hasBlackjack === true) {
    isAlive = true;
    hasBlackjack = false;
    newCardBtn.style.cursor = "pointer";
  }
  let randomCard1 = getRandomCard();
  let randomCard2 = getRandomCard();
  let card1 = randomCard1[0];
  let card2 = randomCard2[0];
  let point1 = randomCard1[1];
  let point2 = randomCard2[1];
  cards = [card1, card2];
  sum = point1 + point2;
  renderGame();
}

function renderGame() {
  // console.log(message);
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    // cardsEl.textContent += cards[i] + "  ";
    const imageTags = cards.map((img) => `<img src="${img}" class="card">`);
    cardsEl.innerHTML = imageTags.join("");
  }
  if (sum <= 20) {
    message = "Do you want to draw more?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackjack = true;
    player.chips = Math.ceil(player.chips * 1.5);
  } else {
    message = "You're out of the game!";
    isAlive = false;
    player.chips =
      player.chips * 0.1 >= 5
        ? Math.ceil(player.chips * 0.9)
        : Math.max(player.chips - 5, 0);
    if (player.chips === 0) {
      startBtn.style.cursor = "not-allowed";
      zeroPoints = true;
    }
  }
  playerEl.textContent = player.name + ": $" + player.chips;
  messageEl.textContent = message;
}

function newCard() {
  // console.log("New game will be started!");
  if (isAlive === true && hasBlackjack === false) {
    let newCard = getRandomCard();
    console.log(newCard);
    let card = newCard[0];
    let point = newCard[1];
    sum += point;
    cards.push(card);
    renderGame();
  } else {
    newCardBtn.style.cursor = "not-allowed";
  }
}
