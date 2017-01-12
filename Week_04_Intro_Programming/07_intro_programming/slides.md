

### Intro to Programming

------

#### FEWD

![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

### Barry Ross

Freelance Web Developer

## Exit ticket review

------

Does the text to the left and floated image to the right always automatically line up on the top?  What would you change to start half way down - etc? 

Is it padding?

http://jsfiddle.net/JoshC/dvp28/

## Exit ticket review

------

Can we do more with interactivity/movement?

## Exit ticket review

------

It might be too high level but can we also use flexbox?

## Exit ticket review

------

Can we touch basis again in next class on how to do the Transparency?

### Introduction To Programming

------

#### "The art of programming is the skill of controlling complexity"

*`-` Haverbeke, M. (2014). Eloquent Javascript. No Starch Press.*

## Learning Objectives

------

- Practice programmatic thinking by writing pseudocode to solve a basic problem
- Define web site behavior and the practical uses of JavaScript
- Predict DOM output/changes by reading JS code

### Programming is about solving problems:

------

##### Introduction to Programming

- How do I conditionally show/hide this piece of content? 
- How do I ensure a user submits a valid email when they fill out this form? 
- How can I display this massive set of data in a meaningful, stunning way? 
- How can I allow people to communicate and collaborate in real-time? 

### What is a Program?

------

#### Introduction To Programming

A __program__ is a set of instructions that you write to tell a computer what to do

### What Is Programming?

------

##### Introduction To Programming

__Programming__ is the task of writing those instructions in a language that the computer can understand.

### Becoming a Programmer

------

##### Introduction To Programming

- It is less about learning a language, and more about changing how one thinks. 
- For this change to take place, one has to know how the computer thinks 

### How do computers think?

##### (not factoring in AI, machine-learning algorithms etc.)

------

##### Introduction To Programming

- The short answer is that  **they don't think.** 
- While computers don't think, they act as if they do, by sequentially executing simple instructions. 
- The only things a computer knows are the things we tell it 
- And it can do those things  **really**  **really** **quickly** 

------

### How do we tell it what to do? 

------

**We give it step-by-step instructions**

![](../../img/extra/cookierecipe.png)

### Introduction To Programming

------

#### How do we figure out the instructions?

***Pseudocode*** 

- Pseudocode is the process of writing a program without using the syntax of a programming language. 



### Pseudo Code

------

##### Introduction To Programming

- Pseudocode is a mixture of natural language and high-level programming constructs

------

example: *If the door is closed and I want to exit the room, then open the door*





### Thermostat Pseudocode

![GeneralAssemb.ly](../../img/icons/code_along.png)

##### helpful questions to ask while pseudocoding

- What is the problem I am trying to solve? 
- What is the goal? 
- Who or what is involved?
- What does the solution look like?
- What variables are involved?
- Will this solution work under all conditions? 
- If not, how can we adapt it so it does?

### Pseudocode Practice

------

##### Independent practice - 10 minutes

Find space on a wall...do your best to independently pseudocode one or more of these items 

- A vending machine that sells one item
- A microwave without preset options (user input only)
- A toaster 
- A vending machine that sells multiple items
- A microwave with built-in prets (popcorn, +30 sec etc.)

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)

### Rock Paper Scissors

------

##### Psuedocode a program that can play rock, paper, scissors with you

**You are the computer.**

What steps do you need to be provided in order to allow a person to play rock, paper, scissors with you?

- Person has a controller with 3 buttons
- The moment they press one, you have the ability to respond to that action

## What is JavaScript?

------

- JavaScript is a programming language that adds interactivity to your website

Note:
(for example: games, responses when buttons are pressed or data entered in forms, dynamic styling, animation). 
taken from https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/JavaScript_basics on 5/12/16

## What is JavaScript?

------

- JavaScript (JS) was introduced in 1995 as a way to add programs to web pages in the Netscape Navigator browser. 
- JS has made modern web applications possible--applications with which you can interact directly, without doing a page reload for every action. 
- JS has almost nothing to do with the programming language named Java. 

Note:

http://eloquentjavascript.net/00_intro.html

## Where does JS fit in?

------

![](../../img/extra/jsvenn.jpg)

Note: 
taken from http://image.slidesharecdn.com/html-ps16-150717124220-lva1-app6892/95/htmlhtml5-2-638.jpg?cb=1437137030 on 5/12/16

## Where does JS fit in?

------

![](../../img/extra/htmlcssjsstack.jpg)

Note:
taken from http://ooyes.net/userfiles/media/css_html_javascript.jpg on 5/12/16

## Remember the HTML DOM?

------

The HTML DOM is a standard **object** model and **programming interface** for HTML.

It defines:

- The HTML elements as  **objects** 
- The  **properties** of all HTML elements 
- The  **methods**  to access all HTML elements
- The  **events**  for all HTML elements

*The HTML DOM is a standard for how to get, change, add, or delete HTML elements* 

Note:
taken from http://www.w3schools.com/js/js_htmldom_methods.asp on 5/12/16

## The DOM API

------

The HTML DOM can be accessed with JavaScript (and with other programming languages) through the DOM API (application programming interface)

------

In the DOM, all HTML elements are defined as  **objects** 

The DOM API is the collection of  **properties**  and **methods** of each object. 

------

A  **property**  is a value that you can get or set (like changing the content of an HTML element). 

A  **method**  is an action you can do (like add or deleting an HTML element). 

Note:
taken from http://www.w3schools.com/js/js_htmldom.asp on 5/12/16

### JS Objects, Properties, Methods

------

![](../../img/extra/js_object.png)

### The Dom & Javascript

------

The purpose of the DOM is to provide a programatic interface for **manipulating** this live document using JavaScript.

![](../../img/extra/domtree.gif)

note:
taken from  http://domenlightenment.com/#1.1  on 5/12/16

http://www.w3schools.com/js/js_htmldom.asp

### The DOM & JS

------

With the object model, JavaScript gets all the power it needs to create dynamic HTML:

- JavaScript can change all the HTML elements in the page 
- JavaScript can change all the HTML attributes in the page 
- JavaScript can change all the CSS styles in the page 
- JavaScript can remove existing HTML elements and attributes 
- JavaScript can add new HTML elements and attributes 
- JavaScript can react to all existing HTML events in the page 
- JavaScript can create new HTML events in the page 

note:
taken from  http://domenlightenment.com/#1.1  on 5/12/16

http://www.w3schools.com/js/js_htmldom.asp

## What can that look like?

## **What will we be doing with JS?**

------

- Using it as the context to learn fundamental programming concepts (e.g. control flow, variables, functions )
- Using it to respond to user actions 
  - button clicks, mouseovers etc) 
- Manipulating the DOM 
  - hiding/showing elements, changing CSS property values
- Exploring a library called jQuery which is built on JavaScript

![GeneralAssemb.ly](../../img/icons/code_along.png)

## Color Switcher



![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)

## Traffic Light