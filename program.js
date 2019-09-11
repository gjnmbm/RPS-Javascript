'use strict'
let move;
let opponentMove;
let possibleMoves = ['rock', 'paper', 'scissors'];
let images = ['images/rock.png', 'images/Paper.png', 'images/Scissors.png'];
function setMove(decision) {
	move = decision;
	setOpponentMove();
	checkWin();
}
function setOpponentMove() {
  opponentMove = possibleMoves[Math.floor(Math.random() * 3)];
  if (opponentMove = 'rock') {
    document.getElementById('opponent').src = images[0];
  }
  else if (opponentMove = 'paper') {
    document.getElementById('opponent').src = images[1];
  }
  else {
    document.getElementById('opponent').src = images[2];
  }
}

function checkWin() {
	switch (move) {
    case 'rock':
    switch (opponentMove) {
      case 'paper':
        document.getElementById("result").textContent = "Result: You lose!";
        break;
      case 'scissors':
        document.getElementById("result").textContent = "Result: You win!";
        break;
	  default:
        document.getElementById("result").textContent = "Result: It's a draw!";
        break;
    }
    break;
    case 'paper':
    switch (opponentMove) {
      case 'rock':
        document.getElementById("result").textContent = "Result: You win!";
        break;
      case 'scissors':
        document.getElementById("result").textContent = "Result: You lose!";
        break;
	  default:
        document.getElementById("result").textContent = "Result: It's a draw!";
        break;
    }
    break;
    case 'scissors':
    switch (opponentMove) {
      case 'rock':
        document.getElementById("result").textContent = "Result: You lose!";
        break;
      case 'paper':
        document.getElementById("result").textContent = "Result: You win!";
        break;
      default:
        document.getElementById("result").textContent = "Result: It's a draw!";
        break;
    }
	break;
  }
}
