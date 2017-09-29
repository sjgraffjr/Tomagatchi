# Purpose
 Created a tamagatchi game. Every 8 seconds hunger level, sleepiness level, boredom level and age all go up 1 point. The tamagatchi will die when hunger, sleepiness, or boredom reaches 10 points. The player can counteract this from happening my clicking on the feed,lights,play buttons. When the user clicks on the feed and play buttons hunger level and boredom level decrease by one point. When the user clicks on the lights button the sleepiness decreases by one every 8 seconds. The tomagatchi turns age 5 it morphs to Warturtle. It turns Blastiose at age 8 and dies at age 15.
 
# Project Organization

```
+scripts 
	+app.js-creates the data and bootstraps the application
    +models-represent the rules for tomagatchi and for how they age
    +views-represent how the page looks and how the user can interact with the page
+styles-adds style to the page
```
# Data-flow
There are two things change the tamagatchi
1. Time
2. User interaction

Whenever the tamagatchi's data is changed the html does not automatically update. So, to make the new data show up on the page the applications calls the global render function.
```
const $h1 = $('<h1>')
<div id="app" class="container"></div> 
```
this is the target for my app
* 
* creating a target for my app in the index.html file
* created a class for tomagatchi to store the data in a tomagachti.js
* created multiple views to put html page and to handle user interactions with the html
* global render function which is window.render combines the views to build a full page
* anytime you change data you have to the app to manuely render via the global render function
