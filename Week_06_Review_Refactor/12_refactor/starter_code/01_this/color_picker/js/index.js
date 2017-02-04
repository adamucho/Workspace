// $("#gray-button").click(alertMe);

$("li").click(changeBackground)

function changeBackground(){
	// console.log("inside change background", $(this).attr("id"))
	$("body").css("background-color",$(this).attr("id"));
}




