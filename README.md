# My First Video Game

## Objective

For this lab, you'll be recreating [this webpage](https://thuyanduong.github.io/js-moving-square/). Experiment and interact with the demo webpage to discover all of its features. You can create and edit any files in this repo in order to implement the same functionality as seen in the demo webpage. This lab is a partial walkthrough that will guide you on how to implement this properly. **Read the implementation steps carefully** in order to minimize headches you might otherwise develop. 

## Required User Stories
1. As a user, I can move my square left, right, up, and down using the arrow keys on the keyboard. The square can never move outside the black box. When it collides with one of the four walls, it cannot continue to move in that direction.
2. As a user, I can click on my square and it will change it to a random color. 

## Directions 

1. If this is a Practice Lab, fork this repository and clone down your forked repo. **OR**, if this is a Lab Assignment generated through Github Classroom, you do not need to fork and can clone down your personalized repo directly. 
2. Code your solution in `index.js`. Open the HTML file in your web browser as you're coding to see your work.
3. Stage, commit, and push your changes regularly.
4. If this is a Practice Lab, open a pull request into The-Marcy-Lab-School:master branch to submit. **OR**, if this is a Lab Assignment, copy the URL of this personalized repo and submit it through Canvas.

## Implemetation Steps

### First, Detect When an Arrow Key is Pressed

There's a bit of starter code in `index.js`. Examine it, and predict what the existing code does. Open `index.html` in the browser and inspect the the console. Now, start typing on your keyboard. What do you notice? `e.key` is a string which represents the key that was pressed. You will need to write some conditional logic to see if the pressed key was `ArrowLeft`, `ArrowRight`, `ArrowUp`, or `ArrowDown`. 

### Next, Move the Square

For this lab, we will change the location of the square using `square.style.left` and `square.style.top`. You can read about [`left`](https://developer.mozilla.org/en-US/docs/Web/CSS/left) and [`top`](https://developer.mozilla.org/en-US/docs/Web/CSS/top) on MDN. **Do not use** `square.style.right` or `square.style.bottom` as these properties are not automatically calculated based off `left` or `top`. 

Your logic should be as followed:
* If `ArrowLeft` was pressed, `square.style.left` should decrease by 10px. For example, if `square.style.left` was `'100px'`, it should change to `'90px'`.
* If `ArrowRight` was pressed, `square.style.left` should increase by 10px. For example, if `square.style.left` was `'100px'`, it should change to `'110px'`.
* If `ArrowUp` was pressed, `square.style.top` should decrease by 10px. For example, if `square.style.top` was `'200px'`, it should change to `'190px'`.
* If `ArrowDown` was pressed, `square.style.top` should increase by 10px. For example, if `square.style.top` was `'200px'`, it should change to `'210px'`.

**Note:** Setting `square.style.left` to a value of `100` will not work! You must set it equal to a string value of `'100px'`. 

### Check for a Collision!

There are certains bounds *for each arrow key press* where the square should not be able to move in that direction anymore. For example, if `square.style.left` is `"0px"`, then it should not be able to move anymore in the left direction. If `square.style.top` is `0px`, then it can't move up anymore. You will have to do some math to figure out the other two bounds. The total dimensions of the black box are `350px` by `350px`. The dimensions of our square is `50px` by `50px`. 

### Change the Color of our Square

Write the code to change the color of our square to a random color every time it is clicked on. You will need to update `square.style.backgroundColor`. Once you complete this step and all previous ones, you are finished with this lab!

### Bonus Feature
* Create a button "Generate Opponent". As a user, I can click on this button in order to spawn a white "opponent" square somewhere randomly inside the black box. If I move my square and it collides with this opponent square, then the opponent will be removed. 
* You can decide if multiple opponent squares are allowed at the same time, or if only one opponent can exist at once!
