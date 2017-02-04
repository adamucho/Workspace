//Tip #1 - Use variables instead of hard-wiring values in your html
var name = ["William", "Neely"];
$("body").append("<img src='images/Will.png' alt='William\'s picture'><p>The instructor for this course is " + names[0] + " \"+ William Neely. William has a degree in Physics from Southwestern College.</p>");
/********** Goes to **********/


/********************************/


//Tip #2 - Use functions to reduce the repitition of html in your jQuery
$("#container>ol").prepend("<li>Milk</li>");
$("#container>ol").prepend("<li>Cookies</li>");
$("#container>ol").prepend("<li>Sugar</li>");
$("#container>ol").prepend("<li>Bananas</li>");
$("#container>ol").prepend("<li>Gatorade</li>");

/********** Goes to **********/
createListItem("milk");
createListItem("Cookies");
createListItem("Sugar");
createListItem("Bananas");
createListItem("Gatorade");

function createListItem(item){
	$(append)

}


/********************************/

//Tip #3 - Utilize Arrays
$("#container>ol").prepend("<li>Milk</li>");
$("#container>ol").prepend("<li>Cookies</li>");
$("#container>ol").prepend("<li>Sugar</li>");
$("#container>ol").prepend("<li>Bananas</li>");
$("#container>ol").prepend("<li>Gatorade</li>");

/********** Goes to **********/



/********************************/


//Tip #4 - Combine jQuery selectors to reduce repetitive code
$("#container").css("width","960px");
$("#main").css("width","960px");

/********** Goes to **********/



/********************************/
//Tip #5 - Combine multiple jQuery css, attr, etc changes to reduce lines of code
$("#container,#main").css("width","960px");
$("#container,#main").css("background","red");
$("#container,#main").css("color","purple");

/********** Goes to **********/


/********************************/

//Tip #6 - Chain jQuery function calls to reduce lines of code
$("input").css("width","200px");
$("input").attr("placeholder","My placeholder");
$("input").before("<label>My input</label>");

/********** Goes to **********/



/********************************/
