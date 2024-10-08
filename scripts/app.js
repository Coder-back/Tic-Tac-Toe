const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  { name: "", symbol: "X" },

  { name: "", symbol: "O" },
];

const playerConfigOverlay = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
const gameAreaElement = document.getElementById("active-game");
const activePlayerNameElement = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");

const editPlayer1Button = document.getElementById("edit-player1-btn");
const editPlayer2Button = document.getElementById("edit-player2-btn");
const cancelConfigButton = document.getElementById("cancel-config");
const startNewGameButton = document.getElementById("start-game-btn");
const gameFieldElements = document.querySelectorAll("#game-board li");
const gameBoardElement = document.getElementById("game-board");

editPlayer1Button.addEventListener("click", openPlayerConfig);
editPlayer2Button.addEventListener("click", openPlayerConfig);

cancelConfigButton.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startNewGameButton.addEventListener("click", startNewGame);

for (const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener("click", selectGameField);
}
