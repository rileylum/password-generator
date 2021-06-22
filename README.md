# Password Generator

## Description

In this homework project I have been tasked to create a function which returns a randomly generated password based on some user input. 
The user input relys on window.alert, window.prompt and window.confirm.
I have used conditional statements, array methods and the math object to create a random password of a certain length and from a set of characters which the user has chosen. 

It must meet the following Acceptance Criteria given the User Story:

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

Here is a screenshot of the finished website:

![The password generator website contains some header text, a text-box to show the generated password, and a button which allows you to generate a password via some prompts.](./assets/img/WebsiteScreengrab.png)

## Usage

The website can be viewed here: https://rileylum.github.io/password-generator/ </br>

Click the 'Generate Password' button and follow the prompts and a random password will be generated.

## Credits

I found a number of resoures useful in this project: </br>

For user input: </br>
https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm

For conditional logic: </br>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...

For random numbers: </br>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

For array methods: </br>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice