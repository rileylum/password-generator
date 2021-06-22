// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

function generatePassword() {
  // get password length from user input
  var passwordLength = parseInt(window.prompt("Set desired password length (between 8 and 128 characters): "));
  // keep asking for user input whilst input is invalid 
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = parseInt(window.prompt("Set desired password length (between 8 and 128 characters): "));
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
