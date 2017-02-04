//Implement the red light using jQuery. Don't forget to add the script tags.

/** event listeners **/

$('#stop-button').click(turnRed);
$('#slow-button').click(turnYellow);
$('#go-button').click(turnGreen);


/** Function definitions **/

function turnRed(){
    blackout();
  $('#stop-light').css("background-color", "red");
}
function turnYellow(){
    blackout();
  $('#slow-light').css("background-color", "yellow");
}

function turnGreen(){
    blackout();
  $('#go-light').css("background-color", "green");
}

function blackout(){
  $("#stop-light").css("background-color","black");
  $("#slow-light").css("background-color","black");
  $("#go-light").css("background-color","black");
}
