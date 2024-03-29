# Base Apparel coming soon page solution

This is my solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

  Coming soon page for a clothing brand. The page is fully responsive and has a form that validates the email address. Very simple and clean design with a nice color scheme.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./images/screenshot.png)


### Links

- Solution URL: [Here](https://github.com/UbaidRussell/Base-Apparel-coming-soon-page)
- Live Site URL: [Here](https://ubaidrussell.github.io/Base-Apparel-coming-soon-page/)

## My process

### Built with

- HTML5
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

This is a piece of code we use to validate the email address. We use a regular expression to check if the email is valid. If it is not valid, we show an error message. If it is valid, we hide the error message.

```js
document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded

    const emailInput = document.getElementById('email');
    const errorMessage = document.querySelector('.error-message');

    document.querySelector('.enter-button').addEventListener('click', function () {
        // Handle the button click event

        const emailValue = emailInput.value.trim();

        if (!isValidEmail(emailValue)) {
            // If the email is not valid, show the error message
            errorMessage.style.display = 'block';
        } else {
            // If the email is valid, hide the error message
            errorMessage.style.display = 'none';
        }
    });

    function isValidEmail(email) {
        // Use a regular expression to check if the email is valid
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
```


### Continued development
We're going to continue working on the email verification. We're going to add a message that says "Thank you for subscribing" when the email is valid. We're also going to add a message that says "Please provide a valid email address" when the email is not valid.


### Useful resources

- [Example resource 1](https://stackoverflow.com/questions/20740523/place-an-image-inside-a-text-field) - This is an amazing article which helped me finally understand how to place an image inside a text field. I'd recommend it to anyone still learning this concept it's not a common thing so you won't find it in many tutorialsm, however it's def something worth knowing.

## Author

- Website - [UbaidRussell.com](https://ubaidrussell.com/)
- Frontend Mentor - [@UbaidRussell](https://www.frontendmentor.io/profile/ubaidrussell)
- Twitter - [@UbaidRussell](https://www.twitter.com/ubaidrussell)


## Acknowledgments

Shout out to Frontend Mentor for providing such a great platform to practice and improve our skills. 