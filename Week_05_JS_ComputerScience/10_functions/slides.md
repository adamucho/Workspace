![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

## FEWD - Functions

### Barry Ross

Freelance Web Developer


## Agenda

- Temperature Converter Application 
- Function arguments & returns
- Temp Converter and/or Cash Register Activity


## Functions
---
A section of a program that performs a specific task


## Functions
---
input and output

![](../../img/extra/function.jpg)
Note:
taken fro http://s3.amazonaws.com/illustrativemathematics/images/000/000/782/medium/Task_1_8c7a6a9a2e1421586c40f125bd783de3.jpg?1335065782 on 5/23/16


## Functions
---
input and output

![](../../img/extra/function-machine.png)
Note:
taken fro http://s3.amazonaws.com/illustrativemathematics/images/000/000/782/medium/Task_1_8c7a6a9a2e1421586c40f125bd783de3.jpg?1335065782 on 5/23/16


## Functions

Why?

---
*  You can reuse code: Define the code once, and use it many times.
*  You can use the same code many times with different arguments, to produce different results.

Note: http://www.w3schools.com/js/js_functions.asp


## Functions
---
When?

---
- When you find yourself writing the same code over and over, except for one small difference
  - e.g. Microwaves allow users to heat items for various durations of time
  - We can structure a lot of our code in a similar fashion...to be reused in varous scenarios

Note: http://www.w3schools.com/js/js_functions.asp


## Functions Syntax
---
![](../../img/unit_2/functions_syntax.png)


## Function Calls
---
![](../../img/unit_2/function_calls.png)


## Function Arguments
---
![](../../img/unit_2/argument_syntax.png)


## Function Arguments
---
![](../../img/unit_2/function_call_argument.png)


## Return Functions
---
*  When JavaScript reaches a return statement, the function will stop executing.

*  If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

*  Functions often compute a return value. The return value is "returned" back to the "caller":


---

## Return functions

*  We can use the output

```
   function returnThis(name){
    return name;
	}

	var returnedName = returnThis("Barry")

	console.log("hello"+returnedName);
```


## Organizing Functions

Where do you put functions?


![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
## Temp Converter


![GeneralAssemb.ly](../../img/icons/code_along.png)
## Cash Register


## Anonymous Functions

*  Functions without a name
*  A very common use of anonymous functions is with __callbacks__

*  They are created at runtime, unlike **function declarations** which are run before any of the other code is executed

*  **Sequentially readable**, help keep the global namespace unpolluted
---


### Function Declaration (not-anonymous)
![GeneralAssemb.ly](../../img/extra/function-declaration.png)

### Function Expression (anonymous)
![GeneralAssemb.ly](../../img/extra/function-operator.png)


## Anonymous functions 

Callback example
```
$('.button').click(function (){
	alert('test');
})
```

Note:
images from http://helephant.com/2008/08/23/javascript-anonymous-functions/ and accessed on 11/8/15
info from http://thoughtsonscripts.blogspot.com/2012/01/javascript-anonymous-functions.html and accessed on 11/8/15
info from https://robots.thoughtbot.com/back-to-basics-anonymous-functions-and-closures and accessed on 11/8/15


![GeneralAssemb.ly](../../img/icons/code_along.png)
## Anonymous Cash Register
