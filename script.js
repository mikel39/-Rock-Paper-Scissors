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
  if (humanChoice === computerChoice) {
    console.log("draw");
  }
};
