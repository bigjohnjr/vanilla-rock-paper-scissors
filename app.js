let playerText = document.getElementById("playerText");
let computerText = document.getElementById("computerText");
let resultText = document.getElementById("resultText");
let choiceButtons = document.querySelectorAll(".choiceButton");

let computer;
let player;

// Function that handles the player choice and calls the computers choice
choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    player = button.id.toUpperCase();
    computerPlay();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = "Result:" + " " + winnerResult();
  });
});

// Computer decision based on random number selection
function computerPlay() {
  let randomChoice = Math.floor(Math.random() * 3) + 1;

  switch (randomChoice) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "SCISSORS";
      break;
    case 3:
      computer = "PAPER";
      break;
  }
}

// Determines outcome of the game
function winnerResult() {
  if (player == computer) {
    return "Draw";
  } else if (computer == "ROCK") {
    return player == "PAPER" ? "You win!" : "You Lose!";
  } else if (computer == "SCISSORS") {
    return player == "ROCK" ? "You win!" : "You Lose!";
  } else if (computer == "PAPER") {
    return player == "SCISSORS" ? "You win!" : "You Lose!";
  }
}
