function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playSingleRound(prayerSelection, computerSelection) {
  // Make Prayerselection case-insensitive
  prayerSelection = prayerSelection.toLowerCase();
  // Define the winning combinations for Rock Paper Scissors.
  const winnigCombinations = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };
  // Determine the winner based on winning combinations
  if (prayerSelection === computerSelection) {
    return "It's a tie!";
  } else if (winnigCombinations[prayerSelection] === computerSelection) {
    return `You Win! ${prayerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${prayerSelection}`;
  }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playSingleRound(playerSelection, computerSelection));
