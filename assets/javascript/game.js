$(document).ready(function() {

	// ******* NUMBER ARRAYS *******

	// random computer variable array
	let rand = [];

	for (var r = 19; r < 120; r++) {
		rand.push(r);
	}

	// crystal numbers array
	let crystals = [];

	for (var c = 1; c < 12; c++) {

		crystals.push(c);
	}

	// console.log(crystals);

	// ******* GLOBAL VARIABLES *******

	// random variables selected by computer
	let randNumber; // number to match
	let crystalNumbers = []; // for array of random crystal values

	let c1;
	let c2;
	let c3;
	let c4;

  let totalScore = 0; // user's score

	let wins = 0;
	let losses = 0;

	// FUNCTIONS //

	// pick a random number
	function pickRandomNumber(arr) {

		let x = arr[Math.floor(Math.random() * arr.length)];
		randNumber = x;
		$("#randomNumber").html(randNumber);

		console.log("random number: " + randNumber);

	} 

	// pick random numbers for crystals

	function pickRandomCrystals(arr) {

		for (var y = 0; y < 4; y++){

			let a = arr[Math.floor(Math.random() * arr.length)];

			crystalNumbers.push(a);
		}
    // check which numbers have been picked
		console.log("crystal numbers: " + crystalNumbers);

	} // END of pickRandomCrystals function

	function crystalValues(arr) {

		// change value of each crystal button according to array
		for (i = 0; i < arr.length; i++) {

		$("#button-" + (i+1)).attr("value", arr[i]);
		console.log(this);
		}
		c1 = arr[0];
		c2 = arr[1];
		c3 = arr[2];
		c4 = arr[3];
	} // END of crystalValues function

	function gameReset(x) {

		crystalNumbers = []; // clears crystal number values

		pickRandomNumber(rand);

		pickRandomCrystals(crystals);

		crystalValues(crystalNumbers);

		totalScore = 0;
		$("#totalNumber").html(totalScore);

		alert(x);
	} // END of gameReset function

	// GAME SETTINGS AT START //

	pickRandomNumber(rand); // random number to match
	pickRandomCrystals(crystals); // array of random crystal values
	crystalValues(crystalNumbers);

		// crystal button functions

		$("#button-1").on("click", function() {

			totalScore += c1;
			$("#totalNumber").html(totalScore);
		});

		$("#button-2").on("click", function() {

			totalScore += c2;
			$("#totalNumber").html(totalScore);
		});

		$("#button-3").on("click", function() {

			totalScore += c3;
			$("#totalNumber").html(totalScore);
		});

		$("#button-4").on("click", function() {

			totalScore += c4;
			$("#totalNumber").html(totalScore);
		});

	$("button").on("click", function() {
		// this is what happens if the user wins
		if (totalScore == randNumber) {

			wins++;
			console.log(totalScore);
			$("#totalNumber").html(totalScore);
			$("#wins").html("Wins: " + wins);


			setTimeout(function() {gameReset("YOU WIN!")}, 200);
		}

		else if (totalScore > randNumber){

			losses++;
			$("#totalNumber").html(totalScore);
			$("#losses").html("Losses: " + losses);

			setTimeout(function() {gameReset("YOU LOSE! :(")}, 200);
		}
	});

}); // end of script
