![GeneralAssemb.ly](https://github.com/generalassembly/ga-ruby-on-rails-for-devs/raw/master/images/ga.png)

### FEWD - Responsive Basics

### Barry Ross

Freelance Web Developer


## **Exit Ticket Review**

Is there a way to differentiate  default JQuery functions such as (slideDown) and created functions such as (getComputerPlay) in order to avoid confusion.


### Layout Review (desktop)

Your Challenge...
- match the CSS selector to the css rule
- add markup to the HTML using the selectors as a reference


### Responive Layouts Intro
- Open up Chrome developer tools and toggle device toolbar
- Let's go to Dwolla.com
- Pair up, and sketch out wireframe of how they think the desktop version would look like (without looking at the desktop version!)


### Responsive Layout
---
The approach that suggests that design and development should respond to the user's behavior and environment based on screen size, platform and orientation. 

Note: 
Info from [http://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/](http://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/) and accessed on 11/23/15


### Fixed Layout
---
- Used up to this point

- Relies on a container of fixed width

- Usually 960px or 980px

- Relies on `px` (or another fixed unit of measurement)


### Responsive Layout
---
- Different styles for different screen widths

  Uses an elastic/fluid layout

  - Fluid

    - Sized in percentages (relative unit of measurement)

    Elastic

    - Sized in `em` (relative unit of measurement)



### What is a media query?
---
A media query limits the scope of a stylesheet

It is comprised of a __*media type*__ combined with an __*expression*__.


### What is a media type?

`screen`

`tv`

`print`

*If you don't define it, it defaults to all.*
*We aren't going to worry about this, but be aware that you will see these in documentation*


### What is media expression?
---
`(max-width: 768px)`

`(min-width: 1224px)`

`(orientation: landscape)`

`(display-mode: fullscreen)`

`(device-aspect-ratio: 16/9)`

*We are going to focus on width, but be aware that there are other expressions that you will see out in the wild*


### What does a media query look like?
---
```
/* Normal style */
p {
  width: 50%
}

/* Responsive style */
@media screen and (max-width: 768px) {
  p {
    width: 100%;
  }
}
```


### What is a breakpoint?
---
Breakpoints are the point a which your sites content will respond to provide the user with the best possible layout.

<img src="https://i.imgur.com/HKrAxwR.png" width="100%" alt="Breakpoint Image">


### What are the most common breakpoints?
---
Widescreen:  > 1024px

Desktop: < 1024px

Tablet: < 768px

Mobile:  < 480px



### Simulator
---
Check out the device simulator in the Chrome dev tools

How is it different then when you resize the window?


#### How do we fix this?

`<meta name="viewport">`

Part 1 - Meta Tag:

Meta tags describe a page's content

Part 2 - Viewport:

Pages are rendered in a virtual "window" called the __*viewport*__

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

The width property controls the size of the viewport.

The initial-scale property controls the initial zoom


Let's add the meta tag and check the simulator.

Success!



### Viewport tag: the problem?

------

To attempt to provide the best experience, mobile browsers will render the page at a desktop screen width (usually about 980px, though this varies across devices)

 ![Screen Shot 2016-06-06 at 3.11.39 PM](../../img/extra/meta1.png)../

Note:
https://developers.google.com/web/fundamentals/design-and-ui/responsive/fundamentals/set-the-viewport?hl=en



#### Viewport tag: the solution
------

```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

instructs the page to match the screen's width in device-independent pixels. This allows the page to reflow content to match different screen sizes, whether rendered on a small mobile phone or a large desktop monitor.

![](../../img/extra/meta2.png)

Note:
https://developers.google.com/web/fundamentals/design-and-ui/responsive/fundamentals/set-the-viewport?hl=en
![](../../img/extra/metatag.png)
https://developers.google.com/web/fundamentals/design-and-ui/responsive/fundamentals/set-the-viewport?hl=en

### 

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png?lastModify=1464917619)


## Responsive Boxes
#### EM
---
**EM vs. REM**

- Sized based on the width of the letter "m" 
- Same as percentages*  1em=100% font-size

Based on parent

```
div {
  font-size:16px;
}

<div>
  <p>This is my paragraph</p>
</div>

```

Child's font size is 32px

Note:[http://alistapart.com/articles/howtosizetextincss](http://alistapart.com/articles/howtosizetextincss)


### REM
---
**EM vs. REM**

- "Root" em
- Same as em

Caveat: Based on the font-size of html element

<aside class="notes">Some browsers have issues with fonts sized in percents

</aside>

