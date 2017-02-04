//creating an array with the values NYC, LA, SYD, LDN

var cities = ["NYC", "LA", "SYD", "LDN"];
cities.push("SEA");
console.log ("My array has " + cities.length + " items");
console.log(cities);
console.log("The first item is " + cities[0] )
console.log ("The second item is " + cities[1])
console.log ("The third item is " + cities[2])
console.log ("The second value (we see) is " + cities[1])

// cities = ["boston"];
console.log(cities);

var index;

// for(index=0; index<cities.length; index++){
// 	console.log(cities[index]);
// 	console.log ("inside the loop");


cities.forEach(function(element,index){
	console.log("inside the for each loop!", element, index)

});
