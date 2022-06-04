import { test, expect } from "@jest/globals";

import {
  calculateGameResult,
  generateComputerMove,
  incrementScore,
  currentScores,
} from "./app.js";

/* 

Task 1 - Test 'calculateGameResults'

Testing criteria: 

The 'calculateGameResults' function takes in the playerMove and computerMove as its arguments. Both playerMove and 
computerMove will be a string of 'rock', 'paper', or 'scissors'. Depending on these two values, we expect calculateGameResults to
return a string with this pattern if there is a winning player:

'`Player chose [rock/paper/scissors] and computer chose [rock/paper/scissors]. [Player wins/Computer wins].`'

and this pattern if it is a draw:

'`Both players chose [rock/paper/scissors]. It's a draw.`'

For example, if you ran the function with the following arguments:

calculateGameResults('rock', 'paper')

it would return the following result:

`Player chose rock and computer chose paper. Computer wins.`

Given this criteria, write a comprehensive set of Jest tests which show that the function always returns the correct string when
it is called in different scenarios of the game. Use your set of tests to debug the function. The first test is written for you.

*/

test(`calculateGameResults returns the correct string when playerMove is 'rock' and computerMove is 'paper'`, () => {
  let playerMove = "rock";
  let computerMove = "paper";
  let actual = calculateGameResult(playerMove, computerMove);
  let expected = `Player chose rock and computer chose paper. Computer wins.`;
  expect(actual).toBe(expected);
});

test(`calculateGameResults returns the correct string when playerMove is 'rock' and computerMove is 'scissors'`, () => {
  let playerMove = "rock";
  let computerMove = "scissors";
  let actual = calculateGameResult(playerMove, computerMove);
  let expected = `Player chose rock and computer chose scissors. Player wins.`;
  expect(actual).toBe(expected);
});

test(`calculateGameResults returns the correct string when playerMove is 'rock' and computerMove is 'rock'`, () => {
  let playerMove = "rock";
  let computerMove = "rock";
  let actual = calculateGameResult(playerMove, computerMove);
  let expected = `Both players chose rock. It's a draw.`;
  expect(actual).toBe(expected);
});

test(`calculateGameResults returns the correct string when playerMove is 'paper' and computerMove is 'rock'`, () => {
  let playerMove = "paper";
  let computerMove = "rock";
  let actual = calculateGameResult(playerMove, computerMove);
  let expected = `Player chose paper and computer chose rock. Player wins.`;
  expect(actual).toBe(expected);
});

test(`calculateGameResults returns the correct string when playerMove is 'paper' and computerMove is 'scissors'`, () => {
  let playerMove = "paper";
  let computerMove = "scissors";
  let actual = calculateGameResult(playerMove, computerMove);
  let expected = `Player chose paper and computer chose scissors. Computer wins.`;
  expect(actual).toBe(expected);
});

test(`calculateGameResults returns the correct string when playerMove is 'paper' and computerMove is 'paper'`, () => {
  let playerMove = "paper";
  let computerMove = "paper";
  let actual = calculateGameResult(playerMove, computerMove);
  let expected = `Both players chose paper. It's a draw.`;
  expect(actual).toBe(expected);
});

test(`calculateGameResults returns the correct string when playerMove is 'scissors' and computerMove is 'rock'`, () => {
  let playerMove = "scissors";
  let computerMove = "rock";
  let actual = calculateGameResult(playerMove, computerMove);
  let expected = `Player chose scissors and computer chose rock. Computer wins.`;
  expect(actual).toBe(expected);
});

test(`calculateGameResults returns the correct string when playerMove is 'scissors' and computerMove is 'paper'`, () => {
  let playerMove = "scissors";
  let computerMove = "paper";
  let actual = calculateGameResult(playerMove, computerMove);
  let expected = `Player chose scissors and computer chose paper. Player wins.`;
  expect(actual).toBe(expected);
});

test(`calculateGameResults returns the correct string when playerMove is 'scissors' and computerMove is 'scissors'`, () => {
  let playerMove = "scissors";
  let computerMove = "scissors";
  let actual = calculateGameResult(playerMove, computerMove);
  let expected = `Both players chose scissors. It's a draw.`;
  expect(actual).toBe(expected);
});

/* 

Task 2 - Test generateComputerMove

The 'generateComputerMove' function should return a string value of either 'rock', 'paper' or 'scissors'. Write a test which shows 
the function works as intended, and debug the function if the test fails.

*/

test("Testing the generateComputerMove() function", () => {
  let expected = ["rock", "paper", "scissors"];
  for (let i = 0; i < 5; i++) {
    let actualMove = generateComputerMove();
    expect(expected).toContain(actualMove);
  }
});

/* 

Task 3 - Test incrementScore

The 'incrementScore' function takes in the 'winner' of the game as its only argument. The 'winner' argument can either be a string
with the value of 'player', 'computer' or 'draw'. Depending on the value of the string, the function will increment the matching
property in a 'currentScores' object. So, if you had the following currentScores object:

const currentScores = {
  playerScoreCounter: 0,
  computerScoreCounter: 0,
  drawCounter: 0,
};

and you called the incrementScore function:

incrementScore('player')

then the value of currentScores.playerScoreCounter would be 1.

Write a set of tests which show the function works as intended, and debug the function if it does not work.

*/

test(" Testing the incrementScore function for Player", () => {
  let previousScore = currentScores.playerScoreCounter;
  incrementScore("player");
  let actual = currentScores.playerScoreCounter - previousScore;
  let expected = 1;
  expect(actual).toBe(expected);
});

test(" Testing the incrementScore function for Computer", () => {
  let previousScore = currentScores.computerScoreCounter;
  incrementScore("computer");
  let actual = currentScores.computerScoreCounter - previousScore;
  let expected = 1;
  expect(actual).toBe(expected);
});

test(" Testing the incrementScore function for Draw", () => {
  let previousScore = currentScores.drawCounter;
  incrementScore("draw");
  let actual = currentScores.drawCounter - previousScore;
  let expected = 1;
  expect(actual).toBe(expected);
});
