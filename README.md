# Tip-calculator-app

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.


### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

Desktop view:

![desktop](https://user-images.githubusercontent.com/95960286/207022123-a77a9cd9-9878-412f-bdae-b85849ae2f7c.png)

Mobile view:

![mobile](https://user-images.githubusercontent.com/95960286/207022847-e699d68e-c2f7-4387-8852-2197ca55adf9.png)


### Links

- Solution URL: [solution](https://www.frontendmentor.io/solutions/tip-calculator-app-vLQ2qykLov)
- Live Site URL: [live site URL](https://storied-kataifi-22ccda.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

    I struggled a lot to complete this challenge, especially designing for mobile view, I had used position as Absolute , Relative for Container since then gets messy while using Virtual Keypad. Finally I sorted out by giving position as  Default(Static) and align it using margins and padding.
    
    
```js
function calculateTip(buttonvalues, billvalue, personvalue) {
    let tips = (billvalue * (buttonvalues / 100)) / personvalue;
    let totalamount = (billvalue / personvalue) + (tips);
    tipperperson.innerHTML = "$" + tips.toFixed(2);
    totalperperson.innerHTML = "$" + totalamount.toFixed(2);
}
```
## Author
- Frontend Mentor - [@Vijayaragavan](https://www.frontendmentor.io/profile/vijayaragavankts)
    

