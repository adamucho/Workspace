/*

hide all the paragraphs
when question 1 is clicked, show answer one 


*/

$(document).ready(function(){
  console.log($("#question-one"));
  console.log("talking to you from index.js");

  // $("p").hide();
  $("#question-one").click(showAnswer1);
  $("#question-two").click(showAnswer2);
  $("#question-three").click(showAnswer3);

  function showAnswer1(){
    console.log(this); // OPTIONAL CHALLENGE
    $("#answer-one").slideToggle();
    console.log("answer 1 is being shown...");
  }

  function showAnswer2(){
    $("#answer-two").slideToggle();
    console.log("answer 2 is being shown...");
  }

  function showAnswer3(){
    $("#answer-three").slideToggle();
    console.log("answer 3 is being shown...");
  }
});
