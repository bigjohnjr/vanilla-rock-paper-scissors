let playerText = document.getElementById("playerText");
let computerText = document.getElementById("computerText");
let resultText = document.getElementById("resultText");
let choiceButtons = document.querySelectorAll(".choiceButton");

let computer;
let player;

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    player = button.id.toUpperCase();
    computerPlay();
    playerText.textContent = `Player: ${player}`;
    computerText.innerHTML = `Computer: ${computer}`;
    resultText.textContent = "Result:" + " " + winnerResult();
  });
});

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
