// game result messages
let winGameMessage = `you won the game`;
let loseGameMessage = `you lost the game`;
let drawGameMessage = `neither you or the computer won the game`;
// round result messages
let winRoundMessage = `you won the round`;
let drawRoundMessage = `the round was a draw`;
let loseRoundMessage = `you lost the round`;
// participant choices
let playerChoice = '';
let computerChoice = '';

function getComputerChoice() {
  let computerChoiceInt = Math.ceil(Math.random() * 3);
  return getComputerChoiceName(computerChoiceInt);
}

function getComputerChoiceName(choiceInt) {
  switch (choiceInt) {
    case 1:
      return 'rock';
    case 2:
      return 'paper';
    case 3:
      return 'scissors';
    default:
      throw new Error('Computer choice was not 1, 2, or 3');
  }
}

function playRound() {
  playerChoice = '';
  computerChoice = getComputerChoice();
  while (!['rock', 'paper', 'scissors'].includes(playerChoice)) {
    playerChoice = prompt("Put in 'Rock', 'Paper', or 'Scissors'.");
    playerChoice = playerChoice.toLowerCase();
  }
  // determine who wins
  // draw scenarios
  if (playerChoice === computerChoice) {
    return drawRoundMessage;
  }
  // player win scenarios
  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return winRoundMessage;
  }
  // computer win scenarios
  if (
    (computerChoice === 'rock' && playerChoice === 'scissors') ||
    (computerChoice === 'paper' && playerChoice === 'rock') ||
    (computerChoice === 'scissors' && playerChoice === 'paper')
  ) {
    return loseRoundMessage;
  }
}

function game() {
  let computerScore = 0;
  let playerScore = 0;

  for (let i = 0; i < 5; i++) {
    let roundResult = playRound();

    console.log(`you chose: ${playerChoice}`);
    console.log(`computer chose: ${computerChoice}`);
    if (roundResult === winRoundMessage) {
      playerScore += 1;
    }
    if (roundResult === loseRoundMessage) {
      computerScore += 1;
    }
    console.log(roundResult, `current score is: ${playerScore}-${computerScore}`);
  }
  if (playerScore > computerScore) {
    console.log(winGameMessage);
  }
  if (computerScore > playerScore) {
    console.log(loseGameMessage);
  }
  if (playerScore === computerScore) {
    console.log(drawGameMessage);
  }
}

window.onload = () => {
  setTimeout(game, 3000);
};
