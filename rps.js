document.addEventListener('DOMContentLoaded', function(event) {

	let playerScore = 0;
	let computerScore = 0;

	function computerPlay() {
		
		// roll number between 1 and 3

		let randNum = parseInt(Math.random() * 3 + 1);

		switch(randNum) {
			case 1:
				return "fire";
				break;
			case 2:
				return "water";
				break;
			case 3:
				return "leaf";
				break;
			default:
				return "None";
				break;
		}
	}

	function playRound(playerChoiceIn, compChoiceIn) {

		let gameResult = document.querySelector('#gameResult');

		if(playerChoiceIn == "fire") {
			if(compChoiceIn == "fire") {
				gameResult.innerHTML = "Game was a Tie.";
			}else if(compChoiceIn == "water") {
				gameResult.innerHTML = "Water beats fire. Computer wins this round!";
				computerScore++;
			} else if(compChoiceIn == "leaf") {
				gameResult.innerHTML = "Fire beats leaf. Player wins this round!";
				playerScore++;
			}
		} else if(playerChoiceIn == "water") {
			if(compChoiceIn == "fire") {
				gameResult.innerHTML = "Water beats fire. Player wins this round";
				playerScore++;
			} else if(compChoiceIn == "water") {
				gameResult.innerHTML = "Game was a tie.";
			} else if(compChoiceIn == "leaf") {
				gameResult.innerHTML = "Leaf beats water. Computer wins this round!";
				computerScore++;
			}
		} else if(playerChoiceIn == "leaf") {
			if(compChoiceIn == "fire") {
				gameResult.innerHTML = "Fire beats leaf. Computer wins this round!";
				computerScore++;
			} else if(compChoiceIn == "water") {
				gameResult.innerHTML = "Leaf beats water. Player wins this round!";
				playerScore++;
			} else if(compChoiceIn == "leaf") {
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
			playerScore = 0;
			computerScore = 0;
		}else if(playerScore >= 5) {
			gameResult.innerHTML = "Player wins the game!";
			playerScore = 0;
			computerScore = 0;
		}

	}

	// get the choice buttons
	let fireChoice = document.querySelector("#fireChoice");
	fireChoice.addEventListener('click', (e) => {
		let playerChoice = 'fire';
		let compChoice = computerPlay();
		playRound(playerChoice, compChoice);
	});

	let waterChoice = document.querySelector("#waterChoice");
	waterChoice.addEventListener('click', (e) => {
		let playerChoice = 'water';
		let compChoice = computerPlay();
		playRound(playerChoice, compChoice);
	});

	let leafChoice = document.querySelector("#leafChoice");
	leafChoice.addEventListener('click', (e) => {
		let playerChoice = 'leaf';
		let compChoice = computerPlay();
		playRound(playerChoice, compChoice);
	});

});
