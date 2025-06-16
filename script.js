const values = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  return values[Math.floor(Math.random() * 3)];
};

const getHumanChoice = () => {
  const userInput = parseInt(prompt("Please choose 1.rock 2.paper 3.scissors"));
  return values[userInput - 1];
};

const playRound = (humanChoice, computerChoice) => {
  const resultsContainer = document.querySelector(".results-container");

  const isDraw = humanChoice === computerChoice;
  const humanHasWon =
    (humanChoice === values[0] && computerChoice === values[2]) ||
    (humanChoice === values[1] && computerChoice === values[0]) ||
    (humanChoice === values[2] && computerChoice === values[1]);

  if (isDraw) {
    resultsContainer.innerHTML = `<p>It's a draw!</p>`;
  } else if (humanHasWon) {
    humanScore++;
    resultsContainer.innerHTML = `<p>You win! ${humanChoice} beats ${computerChoice}</p>`;
  } else {
    computerScore++;
    resultsContainer.innerHTML = `<p>You Lose :(</p>`;
  }
};

const buttons = document.querySelectorAll(".game-container button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) =>
    playRound(e.currentTarget.value, getComputerChoice())
  );
});
