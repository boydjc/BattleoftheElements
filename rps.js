document.addEventListener('DOMContentLoaded', function(event) {

	function computerPlay() {
		
		// roll number between 1 and 3

		let randNum = parseInt(Math.random() * 3 + 1);

		switch(randNum) {
			case 1:
				return "rock";
				break;
			case 2:
				return "paper";
				break;
			case 3:
				return "scissor";
				break;
			default:
				return "None";
				break;
		}
	}

	function playerPlay() {
		let playerChoice = prompt("What is your choice?");
		playerChoice = playerChoice.toLowerCase();

		if(playerChoice == "rock" ||
		   playerChoice == "paper" ||
		   playerChoice == "scissors" ||
		   playerChoice == "scissor") {
			return playerChoice;
		} else {
			alert("Invalid Choice");
		}
	}

	function playRound(playerChoiceIn, compChoiceIn) {
		if(playerChoiceIn == "rock") {
			if(compChoiceIn == "rock") {
				return "tie";
			}else if(compChoiceIn == "paper") {
				return "computer wins";
			} else if(compChoiceIn == "scissor") {
				return "player wins";
			}
		} else if(playerChoiceIn == "paper") {
			if(compChoiceIn == "rock") {
				return "player wins";
			} else if(compChoiceIn == "paper") {
				return "tie";
			} else if(compChoiceIn == "scissor") {
				return "computer wins";
			}
		} else if(playerChoiceIn == "scissor" || playerChoiceIn == "scissors") {
			if(compChoiceIn == "rock") {
				return "computer wins";
			} else if(compChoiceIn == "paper") {
				return "player wins";
			} else if(compChoiceIn == "scissor") {
				return "tie";
			}
		}else {
			return "ERROR - playRound function";
		}
	}
	
	let playerChoice = playerPlay();
	let computerChoice = computerPlay();

	console.log(playRound(playerChoice, computerChoice));
});
