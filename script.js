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
// Test function by using console.log to see the results.
const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playSingleRound(playerSelection, computerSelection));

function game() {
  let playerScore = 0;
  let computerScore = 0;
  // play 5 rounds
  for (let round = 0; round <= 5; round++) {
    prompt(`Round ${round}:`);
    const result = playSingleRound();

    if (result === 'win') {
      prompt('You win!');
      playerScore++;
    } else if (result === 'lose') {
      prompt('You lose!');
      computerScore++;
    } else {
      prompt("It's a tie!");
    }
  }

  //report the final score and winner
  console.log('Final score:');
  console.log(`You: ${playerScore}`);
  console.log(`Computer: ${computerScore}`);

  if (playerScore > computerScore) {
    console.log('You win the game!');
  } else if (playerScore < computerScore) {
    console.log('You lose the game!');
  } else {
    console.log('The game is a tie!');
  }
}
