const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');

rockBtn.addEventListener('click', () => {
  playSingleRound('rock');
});
paperBtn.addEventListener('click', () => {
  playSingleRound('paper');
});
scissorsBtn.addEventListener('click', () => {
  playSingleRound('scissors');
});

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

  console.log(`Player selects ${playerSelection}`);
}
// Test function by using console.log to see the results.
// const playerSelection = 'rock';
// const computerSelection = getComputerChoice();
// console.log(playSingleRound(playerSelection, computerSelection));

function game() {
  let userScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    const playerSelection = prompt(`Round ${i}: What's your move? (rock/paper/scissors)`).toLowerCase();
    const computerSelection = getComputerChoice();
    const result = playSingleRound(playerSelection, computerSelection);

    console.log(`Round ${i}: ${result}`);

    if (result === 'You win!') {
      userScore++;
      console.log(`User wins round ${i}. User score: ${userScore}, computer score: ${computerScore}`);
    } else if (result === 'You lose!') {
      computerScore++;
      console.log(`Computer wins round ${i}. User score: ${userScore}, computer score: ${computerScore}`);
    } else {
      console.log(`Round ${i} is a tie. User score: ${userScore}, computer score: ${computerScore}`);
    }
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
