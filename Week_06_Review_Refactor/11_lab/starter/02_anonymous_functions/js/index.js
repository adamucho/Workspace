
// Function #1
// Let's use attr() to get the value of #a's "class" attribute

$("button").click(function(){
	console.log($(this)," was clicked!");
	event.preventDefault()}) //create a prevent Default for all functions bellow instead of creating on for each

$("#a").click(buttonA);

function buttonA(){
	// event.preventDefault();
	$("#a").attr("class", "button new");//using .attr()as a setter
 	var classes = $("#a").attr("class");//using .attr()as a getter
 	console.log(classes)
 }

// Function #2
// Let's use attr() to get the value of #b's class attribute
$("#b").click(function(){
	var classes = $(this).attr("class");//using .attr()as a getter
	console.log("classes of B: ", classes)

});

// Let's also use $(this) to be more efficient

// Function #3
// Let's use attr() to get the value of #c's class attribute
// Let's also use $(this) to be more efficient
// Let's use an anonymous function to be more efficient

// Function #4
// Let's use attr() to get the value of #c's ID attribute
// Let's also use $(this) to be efficient
$("#c").click(function(){
	console.log($(this).attr("id"));//using .attr()as a getter
	

});

// Let's use an anonymous function to be efficient

// Function #5
// Let's generalize things so we get the id of any button clicked
// Let's also use $(this) to be  efficient
// Let's use an anonymous function to be efficient

// Function #6
// Now that we are detecting the id of any button clicked
// Let's use $(this) to be efficient
// Let's use an anonymous function to be  efficient
// If a or b is clicked, change the background using the attr attribute

