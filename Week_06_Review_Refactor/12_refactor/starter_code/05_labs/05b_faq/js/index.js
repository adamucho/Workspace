//FAQ
$('.answer').hide();

/* triggers  */

$('#question1').click(revealOne);
$('#question2').click(revealTwo);

/* function definitions */

function revealOne(){
	$('#answer1').toggle();
}

function revealTwo(){
	$('#answer2').slideToggle();
}