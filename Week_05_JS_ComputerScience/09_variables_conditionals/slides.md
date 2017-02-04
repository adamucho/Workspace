![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

### FEWD - Intro to Computer Science
#### variables, data types, conditionals

##### Barry Ross
Freelance Web Developer


##Agenda
- jQuery review 
- Variables
- Conditionals
- Begin temp converter app


## Exit tickets
---
*Do you always need to copy the js script support into each folder where you are writing the java script?*

You do need to include a link to jQuery when you want to use it.  Either a *relative* link to a file in a nearby folder, or an *absolute* link to a hosted version online. 

If you are only writing JavaScript (and not jQuery), you do not need to bring in any supporting files...the browser "speaks" JavaScript.


## Exit tickets
*How does what we learned today turn into paper.js stuff?*

- Practice reading documentation
- Understanding of what a JS library is
- Patience and willingness to make mistakes while learning it!
- Logic, syntax, trial/error


## Exit tickets
*Would you recommend creating console.log for every function ?*

- During development, yes, this can be very helpful. 
- Before publishing your site to a "live" environment it is good practice to remove them.  It can help your app run faster and you often don't want everybody seeing your `console.log` output by simply opening their developer tools open!


## jQuery Review

![](../../img/extra/jquerycodeblock.jpg)
Note:
taken from http://cdn.lucemorker.com/blog/wp-content/uploads/2014/02/table.jpg on 5/16/16


## jQuery Review - FAQ exercise

- Pseudocode the process
- Begin coding based off of what kicks the process off
- Fill in the login/blanks
- Test under different conditions!
- Can we improve (shorten, make less redundant, more efficient) our code? 



## Variables

What are variables?

---

A __variable__ is a symbolic name or representation of information

Note: 
http://www.cs.utah.edu/~germain/PPS/Topics/variables.html


### Variables: Outside of computing
---
** Where are some everyday examples of where we use variables?**

- **She** is becoming a better web developer (pronouns)

- Want to meet me for **dinner**? (the value of dinner can vary, but "dinner" gives us something concrete to reference in the meantime)


## Stop and Jot
---
Take 1-2 minutes and **independently** brainstorm (on your desk) examples of ways we use *variables* (placeholders) to make everyday communication, planning or problem-solving easier?


## Variables

A __variable__ is a symbolic name or representation of information


### Variables - what value do they provide? 
---

*  Allow us to write flexible programs that work with different data sets
   *  thermostat works with any <code>desiredTemp</code> and <code>currentTemp</code>
   *  rock, paper, scissors program works when:
```
         userInput = rock;
         userInput = paper;
         userInput = scissors;
```


##Variables

---

- We can tell our program to remember values for us to use later on. 

- The action of saving a value to memory is called __assignment__

- The entity we use to store the value is called a __variable__


##Variables

---

* The action of getting the value from a variable is called __accessing__ the variable

* We will use all the above techniques to store values into variables, and generate new values using existing variables


##Variable Declaration
---
Declaration: 
```
var age;
```
Assignment: 
```
age = 30;
```

Both at the same time: 
```
var age = 30;
```


##Variable Re-Assignment
---
```
var age = "barry";
```

```
name = "Barry";
```

Note:

name is now Amir.

---


##Variable Conventions
---
*	Variables start with a lower case letter
- If they contain multiple words, subsequent words start with an upper case letter.
```
var numberOfStudents = 10;
```
Note:
Go back to code-along now


##Variables & Data Types 
---
What can you store in a variable?


##Data Types
---
The types of different values JavaScript supports include:
* Text -> **String**
* Numbers -> Integer (**int**) or Decimals (**float**)
* True/False -> **Boolean**


##Strings
---
*  Store textual information
*  A string literal is surrounded by quotes

                           "How is the weather today?"
                           'Warm'


##Strings
---
Double vs single quoted strings:

	'They "purchased" it'

	"It's a beautiful day"


##Strings
---
Escaping
"They \"purchased\" it"

'It\'s a beautiful day'


##Conversion: String To Number
---
	var intString = "4";
	var intNumber = parseInt(intString, 10);
	var floatString = "3.14159";
	var floatNumber = parseFloat(floatString);


Note:
Why would you need to convert datatypes?
Numbers are strings and you want to add them together...javascript converts most things to strings so often need to do this when working with the DOM


##Conversion: Number To String
---
```
	var number = 4;
	number.toString(); => "4"
	
	number + ""; => "4"

```

Note:
Why would you need to convert datatypes?


##Numbers
---
Represent numerical data

int:         42

float:      3.14159265


##Numbers
---
Signed

int:         +6

float:      -8.2

Can perform arithmetic on number data types

---


##Arithmetic In JavaScript

![](../../img/unit_1/arithmetic.jpg)


![GeneralAssemb.ly](../../img/icons/code_along.png)
##Score Keeper 


Helpful questions for pseudo code solution

* What is the problem/goal?
* Who or what is involved?
* What functions may need to be created/used?
* What variables are involved (what changes in various situations/conditions)?
* Will this solution work under all conditions?  If not, how can we adapt it so it does?



##Conditionals

![](../../img/unit_1/cfDiagram.png)


##Making Decisions
---
It's either TRUE or FALSE (like booleans)

If you are greater than 18 
you are an adult

	if (age > 18){
		document.write("You are an adult");
	}


##Comparisons - Equality
---
Are two things equal?

```
10 === 10 //true
10 === 5 //false
"hi" === "hi" //true
```


##Logical Operators
---
![](../../img/unit_1/logical_operators.png)

---

Note:
![GeneralAssemb.ly](../../img/icons/code_along.png)
##Logical operator playground


##Conditional Syntax

---

```
if(condition is true) {  
	//Do cool stuff
}
```


##Conditional Syntax
---
```
	if(condition is true) {
		//Do cool stuff
	}else{
		//Do other cool stuff
	}	
```


##Conditional Syntax
---
```
	var topic = "JS";
	
	if (topic == "JS") {
		console.log("You're learning JavaScript");
	} 
	
	else if(topic == "JavaScript") {
		console.log("You're still learning JavaScript");
	} 
	
	else {
	console.log("You're learning something else");
}
```

---


##Multiple Conditions

```
if (name == "GA"  && password == "YellowPencil"){
	//Allow access to internet
}
```

---


##The Truth Table

```
if (name == "GA"  && password == "YellowPencil"){
	//Allow access to internet
}
```

---


##The Truth Table

![](../../img/unit_1/and_table.png)

---


##The Truth Table

```
if (day == "Tuesday"  || day == "Thursday"){
	//We have class today
}
```

---


##The Truth Table

![](../../img/unit_1/or_table.png)


![GeneralAssemb.ly](../../img/icons/code_along.png)
##Comparison


![GeneralAssemb.ly](../../img/icons/code_along.png)
##Blackout


![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Temp Converter


## Temp Converter - User Story

From a user's perspective, what would a functional application that takes celsius temperature, converts it to Fahrenheit and changes the background to reflect the temperature look like?


## Temp Converter - Pseudocode 


## Temp Converter
Code the function that converts the temperature

**Celsius to Fahrenheit**
F = (C * 1.8 )+ 32


##Exit Quiz
- What is a variable and when is a good time to use them?
- Please provide examples of: a string, float, and integer
- Translate the following pseudocode into a JS or jQuery  if/else or if/else if/else statement:
  - define a variable called "temp"
  - if the variable "temp" is greater than 72 (integer or float), then output the following text as a **string**, "it is hot today"
  - otherwise, output the following text, "it is not hot today"
