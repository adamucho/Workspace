// console.log("messege from console.js...");
// console.log(2+2);
// console.log($("#gray-button"));

	$("#gray-button").click(switchGray); //runs switch gray
	$("#white-button").click(switcWhite);

	function switchGray(){
		console.log("switchGray is running");
		$("body").css("background-color", "gray")


	}

	function switchWhite(){
		console.log("switchWhite is running");
		$("body").css("background-color", "white")

