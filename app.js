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

playerScore.innerText = 0;
compScore.innerText = 0;

function compPlay() {
	return rpsArray[Math.floor(Math.random() * 3)];
}

function playRound(player) {
	let comp = compPlay();

	if (
		player == "rock" &&
		comp == "rock" &&
		playerScore.innerText < 5 &&
		compScore.innerText < 5
	) {
		statement.innerText =
			`Player => ${player} : Computer => ${comp}` + "\n" + `Tie!`;
	} else if (
		player == "rock" &&
		comp == "paper" &&
		playerScore.innerText < 5 &&
		compScore.innerText < 5
	) {
		statement.innerText =
			`Player => ${player} : Computer => ${comp}` + "\n" + `comp wins!`;
		compScore.innerText++;
	} else if (
		player == "rock" &&
		comp == "scissors" &&
		playerScore.innerText < 5 &&
		compScore.innerText < 5
	) {
		statement.innerText =
			`Player => ${player} : Computer => ${comp}` + "\n" + `player wins!`;
		playerScore.innerText++;
	} else if (
		player == "paper" &&
		comp == "paper" &&
		playerScore.innerText < 5 &&
		compScore.innerText < 5
	) {
		statement.innerText =
			`Player => ${player} : Computer => ${comp}` + "\n" + ` Tie!`;
	} else if (
		player == "paper" &&
		comp == "scissors" &&
		playerScore.innerText < 5 &&
		compScore.innerText < 5
	) {
		statement.innerText =
			`Player => ${player} : Computer => ${comp}` + "\n" + `comp wins!`;
		compScore.innerText++;
	} else if (
		player == "paper" &&
		comp == "rock" &&
		playerScore.innerText < 5 &&
		compScore.innerText < 5
	) {
		statement.innerText =
			`Player => ${player} : Computer => ${comp}` + "\n" + `player wins!`;
		playerScore.innerText++;
	} else if (
		player == "scissors" &&
		comp == "scissors" &&
		playerScore.innerText < 5 &&
		compScore.innerText < 5
	) {
		statement.innerText =
			`Player => ${player} : Computer => ${comp}` + "\n" + `Tie!`;
	} else if (
		player == "scissors" &&
		comp == "rock" &&
		playerScore.innerText < 5 &&
		compScore.innerText < 5
	) {
		statement.innerText =
			`Player => ${player} : Computer => ${comp}` + "\n" + `comp wins!`;
		compScore.innerText++;
	} else if (
		player == "scissors" &&
		comp == "paper" &&
		playerScore.innerText < 5 &&
		compScore.innerText < 5
	) {
		statement.innerText =
			`Player => ${player} : Computer => ${comp}` + "\n" + `player wins!`;
		playerScore.innerText++;
	}
	if (playerScore.innerText == 5) {
		statement.innerText = "YOU WON THE GAME!!!";
		statement.style.color = "rgb(0, 255, 13)";
		btn.style.visibility = "visible";
		btn.style.color = "rgb(0, 255, 13)";
	}
	if (compScore.innerText == 5) {
		statement.innerText = "OH NO YOU LOST!";
		statement.style.color = "rgb(255, 11, 11)";
		btn.style.visibility = "visible";
	}
}
