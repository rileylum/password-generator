// Assignment Code
var generateBtn = document.querySelector('#generate');

const special = ["!", "\"", "\#"];
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const lower = ["a", "b", "c"];
const upper = ["A", "B", "C"];

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
  // Get booleans from user input for which types of characters will be used in password
  var useSpecial = window.confirm("Do you want to include special characters?");
  var useNumber = window.confirm("Do you want to include numbers?");
  var useLower = window.confirm("Do you want to user lowercase characters?");
  var useUpper = window.confirm("Do you want to use uppercase characters?");

  //if none of the options are chosen, make user choose again
  while (useSpecial === false && useNumber === false && useLower === false && useUpper === false) {
    window.alert("Atleast one option must be chosen, please choose again.")
    useSpecial = window.confirm("Do you want to include special characters?");
    useNumber = window.confirm("Do you want to include numbers?");
    useLower = window.confirm("Do you want to user lowercase characters?");
    useUpper = window.confirm("Do you want to use uppercase characters?");
  }

  // create empty array, and then concat character arrays if their respected boolean is true
  var passwordChars = []
  if (useSpecial) {
    passwordChars = passwordChars.concat(special); //add special characters
  } 
  if (useNumber) {
    passwordChars = passwordChars.concat(number); //add numbers
  } 
  if (useLower) {
    passwordChars = passwordChars.concat(lower); //add lowercase characters
  }
  if (useUpper) {
    passwordChars = passwordChars.concat(upper); //add uppercase characters
  }

  // create empty string
  var password = ""
  // run code passwordLength times, each time adding a random character from passwordChars to password string
  for (var i = 0; i < passwordLength; i++) {
    password = password + passwordChars[Math.floor(Math.random()*passwordChars.length)]
  }
  // return randomly generated password string
  return password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
