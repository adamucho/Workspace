//Get the lights working properly using jQuery. Don't forget to add the script tag in your HTML!

$(document).ready ( function(){

/** Event listeners go here **/
	$("#stop-button").click(turnRed);
	$("#slow-button").click(turnYellow);
	$("#go-button").click(turnGreen);



	$("#hide-me").click(hideOrange);
	$("#show-me").click(showOrange);
	$("#slide-down").click(slideDown);
	$("#slide-up").click(slideUp);
	


/** Function definitions go here: **/

	function hideOrange(){
	$("#toggle").hide();
	}

	function showOrange(){
	$("#toggle").slideDown();
	}

	function slideDown(){
	$("#toggle").slideDown();
	}

	function slideUp(){
	$("#toggle").slideUp();
	}






	//turnRed function
	function turnRed(){
		console.log("stop has been clicked");
		blackout();
		$("#stop-light").css("background-color", "red");
	}


	//turnYellow function
	function turnYellow(){
		console.log("slow has been clicked");
		blackout();
		$("#slow-light").css("background-color", "yellow");
	}


	//turnGreen function
	function turnGreen(){
		console.log("go has been clicked");
		blackout();
		$("#go-light").css("background-color", "green");
	}

	//blackout function
	function blackout(){
		console.log("cleared blackout");
		$(".bulb").css("background-color", "black");
	}



});
