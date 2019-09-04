'use strict'
let move;
let opponentMove;
let possibleMoves = ['rock', 'paper', 'scissors'];
function setMove(decision) {
	move = decision;
	setOpponentMove();
	checkWin();
}
function setOpponentMove() {
	opponentMove = possibleMoves[Math.floor(Math.random() * 3)];
}
function checkWin() {
	if (move === 'rock' && opponentMove === 'scissors') {
		document.getElementById("result").textContent = "Result: You win!";
	}
	else if (move === 'scissors' && opponentMove === 'paper') {
		document.getElementById("result").textContent = "Result: You win!";
	}
	else if (move === 'paper' && opponentMove === 'rock') {
		document.getElementById("result").textContent = "Result: You win!";
	}
	else if (move === 'rock' && opponentMove === 'paper') {
		document.getElementById("result").textContent = "Result: You lose!";
	}
	else if (move === 'paper' && opponentMove === 'scissors') {
		document.getElementById("result").textContent = "Result: You lose!";
	}
	else if (move === 'scissors' && opponentMove === 'rock') {
		document.getElementById("result").textContent = "Result: You lose!";
	}
	else {
		document.getElementById("result").textContent = "Result: It's a draw.";
	}
}
