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

	function game() {
		
		let playerScore = 0;
		let compScore = 0;

		for(let i=0; i<5; i++) {
			let playerChoice = playerPlay();
			let computerChoice = computerPlay();
			let winner = playRound(playerChoice, computerChoice);

			console.log("Player Choice: " + playerChoice);
			console.log("Computer Choice: " + computerChoice);

			if(winner == "computer wins") {
				compScore++;
				console.log("Computer wins this round");
			}else if(winner == "player wins") {
				playerScore++;
				console.log("Player wins this round");
			}else{
				console.log("This round is a tie.");
			}
		}

		if(playerScore > compScore) {
			console.log("Player Wins the Game!");
		}else if(playerScore < compScore) {
			console.log("Computer Wins the Game!");
		}else{
			console.log("The game is a tie.");
		}

		console.log("Player Score: " + playerScore);
		console.log("Computer Score: " + compScore);
	}

	game();
});
