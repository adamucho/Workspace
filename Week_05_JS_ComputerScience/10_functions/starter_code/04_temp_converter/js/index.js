// <!-- How users================= <- From Adam-
// users inputs temp, clicks convert
$(document).ready(function(){
	console.log("jQuery is running...");
	$("button").click(changeBackground);

	function changeBackground(){
	// use. val() to get the users input (celecius)
  var temp = $("#celcius").val();//temp equals what the user entered
  temp = convertTemp(temp);//sets variable temp equal to what the convert Temp function return when the user is passed in as an argument
  console.log("fahr",temp);

	console.log(temp);
	if(temp== "warm" || temp == "hot"){
		$("body").removeClass("cool-bg");
  		$("body").addClass("warm-bg");
  }
	// If the temp is "warm" then, add ".warm-bg"
  else{
		$("body").removeClass("warm-bg");
		$("body").addClass("cool-bg");
	}



	// console.log("event");

	// If the temp is "warm" then, add ".warm-bg"

	// else add ".cool-bg"
	event.preventDefault();
	console.log("convert temp function running...");
	}
})

	function convertTemp(c){
		return c*1.8+32;
	}


// Convert temp from celecius to farhient 

// color changes based on temp

// add a class to body

// If the temp is greate then 90, add ".warm-bg"

// else add ".cool-bg"

// We could have classes in our css, and add/remove thme to the <body> 


