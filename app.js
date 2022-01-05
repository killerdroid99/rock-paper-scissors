const rock = document
	.getElementById("rock")
	.addEventListener("click", function () {
		playRound("rock");
	});

const paper = document
	.getElementById("paper")
	.addEventListener("click", function () {
		playRound("paper");
	});

const scissors = document
	.getElementById("scissors")
	.addEventListener("click", function () {
		playRound("scissors");
	});

let playerScore = document.getElementById("player-score-value");
let compScore = document.getElementById("comp-score-value");
let rpsArray = ["rock", "paper", "scissors"];
let statement = document.getElementById("result_statement");
let btn = document.getElementById("button");

playerScore.innerHTML = 0;
compScore.innerHTML = 0;

function compPlay() {
	return rpsArray[Math.floor(Math.random() * 3)];
}

function playRound(player) {
	let comp = compPlay();

	if (
		player == "rock" &&
		comp == "rock" &&
		playerScore.innerHTML < 5 &&
		compScore.innerHTML < 5
	) {
		statement.innerHTML = `Player => ${player} : Computer => ${comp} <br />   Tie!`;
	} else if (
		player == "rock" &&
		comp == "paper" &&
		playerScore.innerHTML < 5 &&
		compScore.innerHTML < 5
	) {
		statement.innerHTML = `Player => ${player} : Computer => ${comp} <br /> comp wins!`;
		compScore.innerHTML++;
	} else if (
		player == "rock" &&
		comp == "scissors" &&
		playerScore.innerHTML < 5 &&
		compScore.innerHTML < 5
	) {
		statement.innerHTML = `Player => ${player} : Computer => ${comp} <br /> player wins!`;
		playerScore.innerHTML++;
	} else if (
		player == "paper" &&
		comp == "paper" &&
		playerScore.innerHTML < 5 &&
		compScore.innerHTML < 5
	) {
		statement.innerHTML = `Player => ${player} : Computer => ${comp} <br /> Tie!`;
	} else if (
		player == "paper" &&
		comp == "scissors" &&
		playerScore.innerHTML < 5 &&
		compScore.innerHTML < 5
	) {
		statement.innerHTML = `Player => ${player} : Computer => ${comp} <br /> comp wins!`;
		compScore.innerHTML++;
	} else if (
		player == "paper" &&
		comp == "rock" &&
		playerScore.innerHTML < 5 &&
		compScore.innerHTML < 5
	) {
		statement.innerHTML = `Player => ${player} : Computer => ${comp} <br /> player wins!`;
		playerScore.innerHTML++;
	} else if (
		player == "scissors" &&
		comp == "scissors" &&
		playerScore.innerHTML < 5 &&
		compScore.innerHTML < 5
	) {
		statement.innerHTML = `Player => ${player} : Computer => ${comp} <br /> Tie!`;
	} else if (
		player == "scissors" &&
		comp == "rock" &&
		playerScore.innerHTML < 5 &&
		compScore.innerHTML < 5
	) {
		statement.innerHTML = `Player => ${player} : Computer => ${comp} <br /> comp wins!`;
		compScore.innerHTML++;
	} else if (
		player == "scissors" &&
		comp == "paper" &&
		playerScore.innerHTML < 5 &&
		compScore.innerHTML < 5
	) {
		statement.innerHTML = `Player => ${player} : Computer => ${comp} <br /> player wins!`;
		playerScore.innerHTML++;
	}
	if (playerScore.innerHTML == 5) {
		statement.innerHTML = "YOU WON THE GAME!!!";
		statement.style.color = "rgb(0, 255, 13)";
		btn.style.visibility = "visible";
		btn.style.color = "rgb(0, 255, 13)";
	}
	if (compScore.innerHTML == 5) {
		statement.innerHTML = "OH NO YOU LOST!";
		statement.style.color = "rgb(255, 11, 11)";
		btn.style.visibility = "visible";
	}
}
