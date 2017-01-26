![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD
### Arrays, Review & Refactor

### Barry Ross

Freelance Web Developer


##Agenda

*	Arrays
* Refactoring JS & CSS
* $(this) Keyword
* Debug techniques & exercises


## **Collections**

![](../../img/extra/array1.jpg)

Note: taken from https://cdn.thingiverse.com/renders/b4/66/bc/91/d7/Photo_2_preview_featured.jpg on 5/30/16


## Collections

![](../../img/extra/array2.jpg)

Note: taken from https://cdn.thingiverse.com/renders/b4/66/bc/91/d7/Photo_2_preview_featured.jpg on 5/30/16


## In JS, these are called arrays

An array is an ordered arrangement of things

![](../../img/extra/array-comparison.jpg)


## Arrays Collection

![](../../img/unit_1/array_index_diagram.png)

Why would this be useful?

> we've been storing single values, we could do multiple with these


## Arrays
---
What if we had a collection of images that we wanted to display to the screen one at a time?

How/where could we store all the images?


## Declaring Arrays
---
var images = [ ];

*	declaring an empty array using literal notation


## Declaring Arrays
---
images = ["NYC", "LA", "SYD", "LDN"];

*	Arrays are filled with elements
*	Elements can contain strings, numbers, booleans, and more.


## Declaring Arrays
---
If you leave a blank spot in an array it creates a blank shelf space (undefined) placeholder


## Arrays Indexing
---
![Array Indexing](../../img/unit_1/array_index_diagram.png)


## Arrays Indexing
---
Array elements can be fetched by their index number (starts from 0).

	cities = ["NYC", "LA", "SYD", "LDN"];

	console.log(cities[0]); //prints NYC
	console.log(cities[1]); //prints LA
	console.log(cities[2]); //prints SYD
	console.log(cities[3]); //prints LDN


## Array Indexing
---
We can insert new values into any space in the array using the position's index.

	cities[4] = "Seattle;


## Arrays Indexing
---
We can overwrite all the elements of an array simply by giving the array new values or by setting an array equal to a different array.

	var cities2 = ["Denver", "Rochester"];
	cities = cities2;

	console.log(cities); //prints Denver, Rochester


## Array Length
---
What if I would like to know how many elements are in the array?

	console.log(cities.length); //prints 2
JavaScript offers a lot of methods for us to use when dealing with arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


###Arrays code-along
![GeneralAssemb.ly](../../img/icons/code_along.png)


## **For Loop**
- a way to iterate over an array
- allows us to do the same thing with each element
---
When would this be useful?


## **For loop**
---
Format of for loop
```
var startingVariable;

for (starting variable; while this is true; increment variable;)
{
  do this stuff here
}

```


## **For Loop**
---
### Example usage:
```
var index;

var cities = ["NYC", "LA", "SYD", "LDN"];

for (index = 0; index < cities.length; ++index) {
    console.log(cities[index]);
}
```


## forEach()

another method to loop through an array

---

Allows you to run code using each element from the array as a value
Syntax:

	Array.forEach


## Array Length
---
	var cities = ["NYC", "LA", "SYD", "LDN"];
		cities.forEach(function(element,index){
		console.log(element,index);
	});

Note:
Element is the item from the array
Index is the item’s position in the array
As always, code we want to execute goes between curly braces


## More on Arrays
---
For many more Array methods see:

https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array


##Refactor

The process of rewriting code without changing functionality

---
*	To reduce or eliminate redundancy
* Make code easier to read
* Make code more maintainable


## CSS Refactoring
---
*	Remove inline styling
* Replace repeated styles with classes
* Rename classes/ids for readability
* Organize CSS
* Group by section
* Order by precedence (tag selectors at top, id selectors at bottom)
* Create classes for large CSS changes in JS
* Remove unnecessary css


## JS Refactor
---
*	Use functions
* Use variables
* Use arrays
* Combine jQuery selectors
* Combine jQuery property changes into objects
*	.css,.attr,etc
* Chain jQuery function calls


## Keyword: $(this)

jQuery: "this" refers to the selected object


## Topic

How about this code?

```
$("p").on("click",function(e){
    $(this).fadeOut(500);
});
```


## Debugging

Why isn't this working?


## Debugging

Always start be defining the problem.

* "The image is not moving"

* "None of my code works"


## Debugging

This will tell you where to start your hunt

*	Image not moving
   *	find the code that makes the image move

* None of my code works
  *	Syntax error, check console


## Debugging: Level __1__
---
Check for errors (red text, aligned right) in console

To access debugging console
* `PC: CTRL+SHIFT+J`
* Mac: `COMMAND+OPTION+J`

Click the error

The location may not be correct but is a good place to start

Ex: Unbalanced brackets or parentheses


## Debugging: Level __2__
---
So no red errors but not getting the right answer?
Try console.log

Ex:

```
var stringOfNames="";
["Bob","Joe"].forEach(function(element){
	stringOfNames-=element+",";
	console.log(stringOfNames);
});
```


## Debugging: Level __3__
---
*	Use the debugger in Chrome
* Set a breakpoint
* Run the code
* Step through the code until you get to the error
* Variable values display on the right
* You can switch to the console to run code or check value of variable


## Debugging: Level __4__

Get help!

1. Try "Your preferred search engine" search
2. Be ready to clearly articulate the problem (Write out what your problem is)
3. If nothing, ask instructor



![GeneralAssemb.ly](../../img/icons/code_along.png)
