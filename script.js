let ROUND = 0;
let computer = 0;
let player = 0;
const getComputerChoice = () => {
  let guess = Math.floor(Math.random() * 3);
  switch (guess) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;
    default:
      alert("error occurred");
  }
};

const pChoice = document.querySelector(".p-choice");
const cChoice = document.querySelector(".c-choice");

function displayChoice(p, c) {
  cChoice.textContent = `${c}`;
  pChoice.textContent = `${p}`;
}

function round(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    // console.log("It's a Draw!");
    displayChoice(playerSelection, computerSelection);
    return [0, 0];
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    // console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    displayChoice(playerSelection, computerSelection);
    return [1, 0];
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    // console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    displayChoice(playerSelection, computerSelection);
    return [1, 0];
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    // console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    displayChoice(playerSelection, computerSelection);
    return [1, 0];
  } else {
    // console.log(`You Loose! ${computerSelection} beats ${playerSelection}`);
    displayChoice(playerSelection, computerSelection);
  }
  return [0, 1];
}

function hideButtons() {
  buttons.forEach((button) => {
    button.style.display = "none";
  });
}

function declareResult() {
  if (computer == 5) {
    gameRound.textContent = "Computer Wins!";
    hideButtons();
  } else {
    gameRound.textContent = "You Win!";
    hideButtons();
  }
}
function game(playerSelection) {
  updateRound(ROUND);
  let res;
  if (computer < 5 && player < 5) {
    res = round(playerSelection, getComputerChoice());
    updateScores(res);
  }
  if (computer == 5 || player == 5) {
    declareResult();
  }
}

const playButton = document.querySelector("#play-button");
const container = document.querySelector(".container");
const gameRound = document.querySelector(".round");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");

playButton.addEventListener("click", () => {
  playButton.style.display = "none";
  container.style.display = "flex";
  updateRound(ROUND);
});
function updateRound(r) {
  ROUND += 1;
  gameRound.textContent = `ROUND ${ROUND}`;
}
function updateScores(res) {
  computer += res[1];
  player += res[0];
  playerScore.textContent = `${player}`;
  computerScore.textContent = `${computer}`;
}
//Choice Buttons
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    game(button.value);
  });
});
