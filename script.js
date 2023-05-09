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
    return "It's a Draw!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Loose! ${computerSelection} beats ${playerSelection}`;
  }
}
