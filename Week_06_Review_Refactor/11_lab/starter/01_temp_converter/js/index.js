//User inputs temp, clicks convert

//--------------------------------//
$(document).ready(function(){
  console.log("jQuery is running...");
  $("button").click(changeBackground);  //event listener that hears button click and runs changeBackground function

  function changeBackground(){
    // use .val() to get the user's input (Celsius)
    var temp = $("#celsius").val();     
    console.log("celsius", temp); //temp equals what the user entered
    temp = convertTemp(temp);//here, we are reassigning a value to the variable "temp".  The value we are re-assigning it is the output/return of what "convertTemp(temp)" gives us.   
    console.log("fahr", temp);  //this displays the fahrenheit version of the temp


    //color changes, based on the temperature

     if ( temp >= "warm"  || temp == "hot" || temp == "almost hot" ){  // If (this is true OR this is true OR this is true)
      //if input is "warm", add ".warm-bg" 
      $("body").attr("class", "warm-bg a b c d"); //good for setting class name(s) across the board
      // $("body").removeClass("cool-bg"); //good for adding/removing class names individually
      // $("body").addClass("warm-bg");
     }
     else {
      $("body").removeClass("warm-bg");
      $("body").addClass("cool-bg");
     }
    //else add ".cool-bg"
    event.preventDefault(); //prevents the page from refreshing/flickering/jumping
    console.log("convert temp function running...");
  }

});

function convertTemp(c){
  //convert temp from celcius to Fahrenheit


  return c*1.8+32;
}

//if temp is greater than 90, add ".warm-bg"

//else add ".cool-bg"

////we could have classes in our css, and add/remove them to the <body> using jQuery
