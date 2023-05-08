const resultsDiv = document.querySelector('#results');

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playSingleRound(playerSelection, computerSelection) {
  // Make Prayerselection case-insensitive
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return 'You win!';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
  ) {
    return 'You lose!';
  } else {
    return "It's a tie!";
  }
}
// Test function by using console.log to see the results.
// const playerSelection = 'rock';
// const computerSelection = getComputerChoice();
// console.log(playSingleRound(playerSelection, computerSelection));

function game() {
  let userScore = 0;
  let computerScore = 0;

  // // Loops until the player chooses to quit
  // while (true) {
  //   const playerSelection = prompt(
  //     "Choose rock, paper, or scissors (or type 'quit' to exit):"
  //   );

  //   // Ends the game if the player types 'quit'
  //   if (playerSelection === null || playerSelection.toLowerCase() === 'quit') {
  //     break;
  //   }
  const computerSelection = getComputerChoice();
  const result = playSingleRound(playerSelection, computerSelection);

  console.log(result);
  const rockBtn = document.querySelector('#rock-btn');
  const paperBtn = document.querySelector('#paper-btn');
  const scissorsBtn = document.querySelector('#scissors-btn');

  rockBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const result = playSingleRound('rock', computerSelection);
    console.log(result);
    game('rock');
  });
  paperBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const result = playSingleRound('paper', computerSelection);
    console.log(result);
    game('paper');
  });
  scissorsBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const result = playSingleRound('scissors', computerSelection);
    console.log(result);
    game('scissors');
  });

  if (result === 'You win!') {
    userScore++;
    console.log(
      `User wins round ${i}. User score: ${userScore}, computer score: ${computerScore}`
    );
  } else if (result === 'You lose!') {
    computerScore++;
    console.log(
      `Computer wins round ${i}. User score: ${userScore}, computer score: ${computerScore}`
    );
  } else {
    console.log(
      `Round ${i} is a tie. User score: ${userScore}, computer score: ${computerScore}`
    );
  }

  console.log(`Final score: You ${userScore} - ${computerScore} Computer`);

  if (userScore > computerScore) {
    console.log('Congratulations, you win the game!');
  } else if (userScore < computerScore) {
    console.log('Sorry, you lose the game.');
  } else {
    console.log('The game is tied!');
  }
}
