//Your challenge is to build off of the following code, and allow users to
// compare numbers and view which is larger

$(document).ready(function(){
  $("button").click(compare);
  function compare(){
    var a = parseInt($("#a").val());
    var b = parseInt($("#b").val());
    
    if(a > b){
      console.log("a is greater than b");
      $("#comparison").text(">");
    }
    else if (a < b){
      console.log("a is less than b");
      $("#comparison").text("<");

    }
    else{
      console.log("a equals b");
      $("#comparison").text("==");
    }
  }
}); //end of document.ready()
