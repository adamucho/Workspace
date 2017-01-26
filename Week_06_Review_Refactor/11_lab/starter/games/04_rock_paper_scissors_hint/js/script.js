// var humanScore = 0;
// var computerScore = 0;

// $('button').click(function(){


// });

// function play(humanPlay) {
  
  
  


// function getComputerPlay() {
//   var plays = ['rock', 'paper', 'scissors'];
//   var play = plays[Math.floor(Math.random() * plays.length)];
//   return play;
// }

// alert(getComputerPlay())



// Variable for compputer score
var humanScore = 5;
// Variable for player score
var computerScore = 10;

$('button').click(function(){


var computerTurn = getComputerPlay();
var humanPlay =  $(this).attr("id");
play (humanPlay);
	// alert(computerTurn);

console.log(" Player choose: ", $(this).attr("id"))
	$("#status").text("You choose: " + $(this).attr("id") + " Computer chose:" + computerTurn);

});

// Detect when a button is clicked, and take note of which button is clicked
function play(humanPlay) {
	var computerTurn = getComputerPlay();
}

// computer makes random selection

function getComputerPlay() {
  var plays = ['rock', 'paper', 'scissors'];
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}




// logic to determine who wins or lose

// display which button the user clicked

// display computer selection

// display if user won/lost

// display approriate emoji

// declare winner by adding "1" to the score
$("#human-score").text(humanScore);
$("#computer-score").text(computerScore);
//
