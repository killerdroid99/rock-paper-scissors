let rpsArray = ["rock", "paper", "scissors"];

function compPlay() {
	return rpsArray[Math.floor(Math.random() * 3)];
}

function playRound(player, comp) {
	if (player == "rock" && comp == "rock") {
		console.log(`player - ${player} : computer - ${comp} Tie!`);
	} else if (player == "rock" && comp == "paper") {
		console.log(`player - ${player} : computer - ${comp} comp wins!`);
	} else if (player == "rock" && comp == "scissors") {
		console.log(`player - ${player} : computer - ${comp} player wins!`);
	} else if (player == "paper" && comp == "paper") {
		console.log(`player - ${player} : computer - ${comp} Tie!`);
	} else if (player == "paper" && comp == "scissors") {
		console.log(`player - ${player} : computer - ${comp} comp wins!`);
	} else if (player == "paper" && comp == "rock") {
		console.log(`player - ${player} : computer - ${comp} player wins!`);
	} else if (player == "scissors" && comp == "scissors") {
		console.log(`player - ${player} : computer - ${comp} Tie!`);
	} else if (player == "scissors" && comp == "rock") {
		console.log(`player - ${player} : computer - ${comp} comp wins!`);
	} else if (player == "scissors" && comp == "paper") {
		console.log(`player - ${player} : computer - ${comp} player wins!`);
	} else {
		console.log("Enter rock, paper or scissors");
	}
}
const playerSelection = window.prompt("Rock, Paper or Scissors?");

playRound(playerSelection.toLowerCase(), compPlay());
