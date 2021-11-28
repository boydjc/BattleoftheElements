document.addEventListener('DOMContentLoaded', function(event) {

	function computerPlay() {
		
		// roll number between 1 and 3

		let randNum = parseInt(Math.random() * 3 + 1);

		switch(randNum) {
			case 1:
				return "Rock";
				break;
			case 2:
				return "Paper";
				break;
			case 3:
				return "Scissors";
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
	
	console.log("Computer Choice: " + computerPlay());
	console.log("Player Choice: " + playerPlay());
});
