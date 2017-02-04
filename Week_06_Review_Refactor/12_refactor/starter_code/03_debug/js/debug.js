
//Task #1 - fix error thrown example
$("body").append("<h1>Hi world!</h1>");

//Task #3 Using a .forEach() loop, and console.log, log each of the pies and their index to the console
var pies=["Cherry","Pumpkin","Banana","Rhubarb"];
$("body").append("There are "+pies.length+" total pies.<br>");
pies.forEach(function(element,index){
	switch(element){
		case "Cherry": $("body").append()
		break;
		case "Rhubarb": $("body")
		break;
		case "Banana":
		case "Pumpkin": $("body")
		break;
	}
});

//Task #2 - resolve error you see in the console
function doSomething(){
  var myThing = 3;
	$("body").append("<p>Paragraph</p>");
	console.log(myThing);
}

doSomething();
