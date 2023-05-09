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
function round(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    console.log("It's a Draw!");
    return [0, 0];
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    return [1, 0];
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    return [1, 0];
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    return [1, 0];
  } else {
    console.log(`You Loose! ${computerSelection} beats ${playerSelection}`);
  }
  return [0, 1];
}

function game() {
  let computer = 0;
  let player = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter your choice [Rock, Paper or Scissors]");
    let res = round(playerSelection, getComputerChoice());
    computer += res[1];
    player += res[0];
  }
  if (player === computer) console.log("Draw");
  else if (player > computer) console.log("You win!! <3");
  else console.log("You lost! Better luck next time!!");
  player = 0;
  computer = 0;
}

game();
