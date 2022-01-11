document.addEventListener('DOMContentLoaded', function(event) {

	let playerScore = 0;
	let computerScore = 0;

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

	function playRound(playerChoiceIn, compChoiceIn) {

		let gameResult = document.querySelector('#gameResult');

		if(playerChoiceIn == "rock") {
			if(compChoiceIn == "rock") {
				gameResult.innerHTML = "Game was a Tie.";
			}else if(compChoiceIn == "paper") {
				gameResult.innerHTML = "Paper beats rock. Computer wins this round!";
				computerScore++;
			} else if(compChoiceIn == "scissor") {
				gameResult.innerHTML = "Rock beats scissors. Player wins this round!";
				playerScore++;
			}
		} else if(playerChoiceIn == "paper") {
			if(compChoiceIn == "rock") {
				gameResult.innerHTML = "Paper beats rock. Player wins this round";
				playerScore++;
			} else if(compChoiceIn == "paper") {
				gameResult.innerHTML = "Game was a tie.";
			} else if(compChoiceIn == "scissor") {
				gameResult.innerHTML = "Scissor beats paper. Computer wins this round!";
				computerScore++;
			}
		} else if(playerChoiceIn == "scissor" || playerChoiceIn == "scissors") {
			if(compChoiceIn == "rock") {
				gameResult.innerHTML = "Rock beats scissors. Computer wins this round!";
				computerScore++;
			} else if(compChoiceIn == "paper") {
				gameResult.innerHTML = "Scissor beats paper. Player wins this round!";
				playerScore++;
			} else if(compChoiceIn == "scissor") {
				gameResult.innerHTML = "Game was a tie.";
			}
		}else {
			return "ERROR - playRound function";
		}

		// update score labels
		let computerScoreLabel = document.querySelector('#computerScore');
		computerScoreLabel.innerHTML = "Computer Score: " + computerScore;

		let playerScoreLabel = document.querySelector('#playerScore');
		playerScoreLabel.innerHTML = "Player Score: " + playerScore;

		if(computerScore >= 5) {
			gameResult.innerHTML = "Computer wins the game!";
		}else if(playerScore >= 5) {
			gameResult.innerHTML = "Player wins the game!";
		}

	}

	// get the choice buttons
	let rockButton = document.querySelector("#rockButton");
	rockButton.addEventListener('click', (e) => {
		let playerChoice = 'rock';
		let compChoice = computerPlay();
		playRound(playerChoice, compChoice);
	});

	let paperButton = document.querySelector("#paperButton");
	paperButton.addEventListener('click', (e) => {
		let playerChoice = 'paper';
		let compChoice = computerPlay();
		playRound(playerChoice, compChoice);
	});

	let scissorButton = document.querySelector("#scissorButton");
	scissorButton.addEventListener('click', (e) => {
		let playerChoice = 'scissor';
		let compChoice = computerPlay();
		playRound(playerChoice, compChoice);
	});

});
