let editedPlayer = 0;

const players = [
  { name: "", symbol: "X" },

  { name: "", symbol: "O" },
];

const playerConfigOverlay = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");

const editPlayer1Button = document.getElementById("edit-player1-btn");
const editPlayer2Button = document.getElementById("edit-player2-btn");
const cancelConfigButton = document.getElementById("cancel-config");

editPlayer1Button.addEventListener("click", openPlayerConfig);
editPlayer2Button.addEventListener("click", openPlayerConfig);

cancelConfigButton.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);
