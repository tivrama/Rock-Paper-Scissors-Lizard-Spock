document.addEventListener("DOMContentLoaded", function(e){

	//Attach button choices to vars
	var rock = document.getElementById('rock'),
		paper = document.getElementById('paper'),
		scissors = document.getElementById('scissors'),
		lizard = document.getElementById('lizard'),
		spock = document.getElementById('spock');

	//Make a user choice var
	var userChoice = "";



	//Make counter that totals the user's wins vs the computer's
	var userWins = document.getElementById('userScore'),
		computerWins = document.getElementById('computerScore');

	//Make function that increments wins and updates page. 
	var upsdateScore = function(whoWon) {
		if(whoWon === 'U') {
			Number(userWins.innerText);
			userWins.innerText ++;
			userWins.innerText.toString();
			return userWins;
		}
		else {
			Number(computerWins.innerText);
			computerWins.innerText ++;
			computerWins.innerText.toString();
			return computerWins;
		}
	};



	//Make a function that runs the logic of the game
	var runGame = function(userChoice) {

		//Computer's choice
		var computerChoice = Math.random();

		if(computerChoice < .20){
			computerChoice = "Rock";
		}
		else if(computerChoice <.40){
			computerChoice = "Paper";
		}
		else if(computerChoice <.60){
			computerChoice = "Scissors";
		}
		else if(computerChoice <.80){
			computerChoice = "Lizard";
		}
		else computerChoice = "Spock";

		alert("Computer chose " + computerChoice);



		//Game logic
		if(userChoice === computerChoice){
			alert("It's a draw...");
			return 
		};
		if(userChoice === "Rock" && computerChoice === "Paper"){
			alert("Paper covers Rock.  Computer wins...");
			return upsdateScore('C');
		}
		else if(userChoice === "Rock" && computerChoice === "Scissors"){
			alert("Rock breaks Scissors.  You win!");
			return upsdateScore('U');
		}
		else if(userChoice === "Paper" && computerChoice === "Rock"){
			alert("Paper covers Rock.  You win!");
			return upsdateScore('U');
		}
		else if(userChoice === "Paper" && computerChoice === "Scissors"){
			alert("Scissors cuts Paper.  Computer wins...");
			return upsdateScore('C');
		}
		else if(userChoice === "Scissors" && computerChoice === "Rock"){
			alert("Rock breaks Scissors.  Computer wins...");
			return upsdateScore('C');
		}
		else if(userChoice === "Scissors" && computerChoice === "Paper"){
			alert("Scissors cut Paper.  You win!");
			return upsdateScore('U');
		}
		else if(userChoice === "Rock" && computerChoice === "Lizard"){
			alert("Rock clubs Lizard.  You win!");
			return upsdateScore('U');
		}
		else if(userChoice === "Rock" && computerChoice === "Spock"){
			alert("Spock phazes Rock.  Computer wins...");
			return upsdateScore('C');
		}
		else if(userChoice === "Paper" && computerChoice === "Lizard"){
			alert("Lizard eats Paper.  Computer wins...");
			return upsdateScore('C');
		}
		else if(userChoice === "Paper" && computerChoice === "Spock"){
			alert("Paper disproves Spock.  You Win!");
			return upsdateScore('U');
		}
		else if(userChoice === "Scissors" && computerChoice === "Lizard"){
			alert("Scissors decapotates Lizard.  You win!");
			return upsdateScore('U');
		}
		else if(userChoice === "Scissors" && computerChoice === "Spock"){
			alert("Spock smashes Scissors.  Computer wins...");
			return upsdateScore('C');
		}
		else if(userChoice === "Spock" && computerChoice === "Rock"){
			alert("Spock phazes Rock.  You win!");
			return upsdateScore('U');
		}
		else if(userChoice === "Spock" && computerChoice === "Paper"){
			alert("Paper disproves Spock.  Computer wins...");
			return upsdateScore('C');
		}
		else if(userChoice === "Spock" && computerChoice === "Scissors"){
			alert("Spock smashes Scissors.  You win!");
			return upsdateScore('U');
		}
		else if(userChoice === "Spock" && computerChoice === "Lizard"){
			alert("Lizard bites Spock.  Computer wins...");
			return upsdateScore('C');
		}
		else if(userChoice === "Lizard" && computerChoice === "Spock"){
			alert("Lizard bites Spock.  You win!");
			return upsdateScore('U');
		}
		else if(userChoice === "Lizard" && computerChoice === "Rock"){
			alert("Rock clubs Lizard.  Computer wins...");
			return upsdateScore('C');
		}
		else if(userChoice === "Lizard" && computerChoice === "Paper"){
			alert("Lizard eats Paper.  You win!");
			return upsdateScore('U');
		}
		else if(userChoice === "Lizard" && computerChoice === "Scissors"){
			alert("Scissors decapotates Lizard.  Computer wins...");
			return upsdateScore('C');
		}
	}


	//Attach userChoice to buttons and run the game
	rock.addEventListener('click', function(e){
		e.preventDefault();
		userChoice = "Rock";
		runGame(userChoice);
	});
	paper.addEventListener('click', function(e){
		e.preventDefault();
		userChoice = "Paper";
		runGame(userChoice);
	});
	scissors.addEventListener('click', function(e){
		e.preventDefault();
		userChoice = "Scissors";
		runGame(userChoice);
	});
	lizard.addEventListener('click', function(e){
		e.preventDefault();
		userChoice = "Lizard";
		runGame(userChoice);
	});
	spock.addEventListener('click', function(e){
		e.preventDefault();
		userChoice = "Spock";
		runGame(userChoice);
	});




});
