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

