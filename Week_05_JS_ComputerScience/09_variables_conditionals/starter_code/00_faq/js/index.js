
// hide all the paragraphs
// when question 1 is clciked show answer one

$(document).ready(function(){

console.log($("#question-one"));
console.log("talking to you from index.js");


// .hide hides everything first before clicking and showing
$("p").hide();
$("#question-one").click(showAnswer1);
$("#question-two").click(showAnswer2)
$("#question-three").click(showAnswer3)



function showAnswer1(){
	$("#answer-one").slideToggle();
	console.log("#answer 1 is being show....");
}

function showAnswer2(){
	$("#answer-two").slideToggle();
	console.log("#answer 2 is being show....");
}

function showAnswer3(){
	$("#answer-three").slideToggle();
	console.log("#answer 3 is being show....");
}

});


