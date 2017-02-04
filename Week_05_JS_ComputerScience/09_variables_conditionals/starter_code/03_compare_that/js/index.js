//Your challenge is to build off of the following code, and allow users to
// compare numbers and view which is larger

$(document).ready(function(){
  $("button").click(compare);
  function compare(){
    var a = 500;
    var b = 500;
    
    if(a > b){
      console.log("a is greater than b");
    }
    else{
      console.log("a equals b");
    }
  }

}); //end of document.ready()
