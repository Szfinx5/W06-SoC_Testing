// Do not read me until writing your tests!

export const currentScores = {
  playerScoreCounter: 0,
  computerScoreCounter: 0,
  drawCounter: 0,
};

export function calculateGameResult(playerMove, computerMove) {
  if (playerMove === "rock" && computerMove === "rock") {
    incrementScore("draw", currentScores);
    return `Both players chose rock. It's a draw.`;
  }
  if (playerMove === "rock" && computerMove === "paper") {
    incrementScore("computer", currentScores);
    return `Player chose rock and computer chose paper. Computer wins.`;
  }
  if (playerMove === "rock" && computerMove === "scissors") {
    incrementScore("player", currentScores);
    return `Player chose rock and computer chose scissors. Player wins.`;
  }
  if (playerMove === "paper" && computerMove === "rock") {
    incrementScore("player", currentScores);
    return `Player chose paper and computer chose rock. Player wins.`;
  }
  if (playerMove === "paper" && computerMove === "paper") {
    incrementScore("draw", currentScores);
    return `Both players chose paper. It's a draw.`;
  }
  if (playerMove === "paper" && computerMove === "scissors") {
    incrementScore("computer", currentScores);
    return `Player chose paper and computer chose scissors. Computer wins.`;
  }
  if (playerMove === "scissors" && computerMove === "rock") {
    incrementScore("computer", currentScores);
    return `Player chose scissors and computer chose rock. Computer wins.`;
  }
  if (playerMove === "scissors" && computerMove === "paper") {
    incrementScore("player", currentScores);
    return `Player chose scissors and computer chose paper. Player wins.`;
  }
  if (playerMove === "scissors" && computerMove === "scissors") {
    incrementScore("draw", currentScores);
    return `Both players chose scissors. It's a draw.`;
  }
}

export function generateComputerMove() {
  let possibleMoves = ["rock", "paper", "scissors"];
  let randomPossibleMovesIndex = Math.floor(Math.random() * 2);
  let randomMove = possibleMoves[randomPossibleMovesIndex];
  return randomMove;
}

export function incrementScore(winner) {
  if (winner === "player") {
    currentScores.playerScoreCounter++;
  }
  if (winner === "computer") {
    currentScores.computerScoreCounter++;
  }
  if (winner === "draw") {
    currentScores.drawCounter++;
  }
}

function gameLoop() {
  let playerMove = prompt(`Enter either 'rock', 'paper' or 'scissors'`)
    .toLowerCase()
    .trim();
  let computerMove = generateComputerMove();
  let gameResult = calculateGameResult(playerMove, computerMove, currentScores);
  let playAgain = confirm(
    `${gameResult} The scores are: Player: ${currentScores.playerScoreCounter}, Computer: ${currentScores.computerScoreCounter}, Draws: ${currentScores.drawCounter}. Do you want to play again?`
  );
  if (playAgain === true) {
    return gameLoop();
  } else return alert("Thanks for playing!");
}
