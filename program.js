'use strict'
let move;
let opponentMove;
let score = 0, totalGames = 0;
let possibleMoves = ['rock', 'paper', 'scissors'];
let images = ['images/rock.png', 'images/Paper.png', 'images/Scissors.png'];
function setMove(decision) {
	move = decision;
  setOpponentMove();
  checkWin();
  document.getElementById('score').textContent = `Wins/Total Games Played: ${score}/${++totalGames}`;
}
function setOpponentMove() {
  opponentMove = possibleMoves[Math.floor(Math.random() * 3)];
}

function checkWin() {
	switch (move) {
    case 'rock':
    switch (opponentMove) {
      case 'paper':
        document.getElementById('opponent').src = images[1];
        document.getElementById("result").textContent = "Result: You lose!";
        break;
      case 'scissors':
        ++score;
        document.getElementById('opponent').src = images[2];
        document.getElementById("result").textContent = "Result: You win!";
        break;
	  default:
        document.getElementById('opponent').src = images[0];
        document.getElementById("result").textContent = "Result: It's a draw!";
        break;
    }
    break;
    case 'paper':
    switch (opponentMove) {
      case 'rock':
        ++score;
        document.getElementById('opponent').src = images[0];
        document.getElementById("result").textContent = "Result: You win!";
        break;
      case 'scissors':
        document.getElementById('opponent').src = images[2];
        document.getElementById("result").textContent = "Result: You lose!";
        break;
	  default:
        document.getElementById('opponent').src = images[1];
        document.getElementById("result").textContent = "Result: It's a draw!";
        break;
    }
    break;
    case 'scissors':
    switch (opponentMove) {
      case 'rock':
        document.getElementById('opponent').src = images[0];
        document.getElementById("result").textContent = "Result: You lose!";
        break;
      case 'paper':
        ++score;
        document.getElementById('opponent').src = images[1];
        document.getElementById("result").textContent = "Result: You win!";
        break;
      default:
        document.getElementById('opponent').src = images[2];
        document.getElementById("result").textContent = "Result: It's a draw!";
        break;
    }
	break;
  }
}
