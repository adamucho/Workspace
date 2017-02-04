  // Prevent default for any and every button blick
  $("button").click(function(){
    console.log($(this), " was clicked!");
    event.preventDefault();
   });

   
// Function #1
// Let's use attr() to get the value of #a's "class" attribute
  $("#a").click(buttonA);

  function buttonA(){
   $("#a").attr("class","button new"); //example of using .attr() as a setter
   var classes =  $("#a").attr("class"); //using .attr() as a getter
   console.log(classes);
  }

// Function #2 
// Let's use attr() to get the value of #b's class attribute
// Let's also use $(this) to be more efficient

// Function #3
// Let's use attr() to get the value of #c's class attribute
// Let's also use $(this) to be more efficient
// Let's use an anonymous function to be more efficient

//SOLUTION for #2 and #3 above (but targets "#b" instead of "#c" for #3)
  $("#b").click(function(){
    var classes =  $(this).attr("class"); //using .attr() as a getter
    console.log("classes of B: ", classes);
  });

  // NAMED FUNCTION we used before refactoring the above to use an anonymous function
  // function buttonB(){
  //   var classes =  $(this).attr("class"); //using .attr() as a getter
  // }


// Function #4
// Let's use attr() to get the value of #c's ID attribute
// Let's also use $(this) to be efficient
// Let's use an anonymous function to be efficient
  $("#c").click(function(){
    console.log($(this).attr("id"));
  });
  
// Function #5
// Let's generalize things so we get the id of any button clicked
// Let's also use $(this) to be  efficient
// Let's use an anonymous function to be efficient
  $("button").click(function(){
    console.log($(this).attr("id"));
  });
  
// Function #6
// Now that we are detecting the id of any button clicked
// Let's use $(this) to be efficient
// Let's use an anonymous function to be  efficient
// If a or b is clicked, change the background using the attr attribute
$("button").click(function(){
  var clickedId = $(this).attr("id");
  if(clickedId == "a" || clickedId == "b"){
    $("body").attr("class", "dark");
  }
});
