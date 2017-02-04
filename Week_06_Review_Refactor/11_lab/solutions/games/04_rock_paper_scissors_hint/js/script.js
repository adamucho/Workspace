// variable for player score
var humanScore = 5;

// variable for computer score
var computerScore = 10;

/*** ORGINIZATION -- USE THIS FIRST SECTION TO DETECT USER INPUT AND TRIGGER THE LOGIC OF OUR APP IN THE play() FUNCTION ***/

  //detect when a button is clicked, and take note of which one was clicked. 
  $('button').click(function(){

  // variable for storing which button was clicked
  var humanPlay = $(this).attr("id"); //uses $(this) to retrieve the element that triggered the event (the button that was clicked in this case)

    play(humanPlay);  //run a "play()" function that will handle the logic of our app
    //display which button the user clicked n);
  });
/*****************/

/*** ORGINIZATION -- USE THIS play() FUNCTION TO HANDLE THE MAIN LOGIC OF OUR APP ***/

function play(humanPlay) {
  var computerTurn = getComputerPlay();

  //display computer's selection 
  console.log("Player chose: ", computerTurn);
  
  //display person's selection 
  console.log("Player chose: ", humanPlay);
  
  //display both the person and the computer's selection in the <div id="status"></div> element on the page
  $("#status").text("You chose: " + humanPlay + " Computer chose:"+ computerTurn);
  
  //logic to determine who wins based off of selections
  
  //Scenario 1 , human chooses rock 
  if(humanPlay == "rock"){  
    /* the following three conditions all fall under the above condition where the person has chosen rock.  We would have to write similar nested conditions for the cases  that the human a) chooses paper and b ) chooses scissors*/
      if( computerTurn == "rock"){
        $("#status").text("You tied: : |");
      }
      else if (computerTurn == "paper"){
         $("#status").text("You lose: : ( ");
         computerScore = computerScore +1;
      }
      else{
        $("#status").text("You win : )");
        humanScore = humanScore + 1;
      }
  }
  
  //Scenario 2 , human chooses paper 
    // nested condition 1 
    // nested condition 2
    // nested condition 3
     
  //Scenario 3 , human chooses scissors 
    // nested condition 1 
    // nested condition 2
    // nested condition 3
  
  //Display the current value of humanScore and computerScore on the page.  This will have been updated based off of the logic starting at line #35 above
  $("#human-score").text(humanScore);
  $("#computer-score").text(computerScore);
}

/*********************************/

/*** ORGINIZATION -- SEPARATE OUT THE getComputerPlay() function so it is self-contained and could be re-used without having to run the entire play() function ***/

  //computer makes random selection
  function getComputerPlay() {
    var plays = ['rock', 'paper', 'scissors']; //an array of items 
    var play = plays[Math.floor(Math.random() * plays.length)]; //this picks a random number between 0, 1 and 2 and then chooses one of the items in the array based on the random number.  Effectively, it randomly chooses "rock", "paper", or "scissors" */
    return play;
  }

