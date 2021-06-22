// Assignment Code
var generateBtn = document.querySelector('#generate');

const special = ["!", "\"", "\#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

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

  // create empty array, and then concat character arrays to their own index if their respected boolean is true
  var passwordChars = []
  var numDiffChars = 0;

  if (useSpecial) {
    passwordChars[numDiffChars] = special; //add special characters to next index
    numDiffChars++;
  } 
  if (useNumber) {
    passwordChars[numDiffChars] = number; //add numbers to next index
    numDiffChars++;
  } 
  if (useLower) {
    passwordChars[numDiffChars] = lower; //add lowercase characters next index
    numDiffChars++;
  }
  if (useUpper) {
    passwordChars[numDiffChars] = upper; //add uppercase characters next index
    numDiffChars++;
  }

  // create empty string
  var password = ""
  // create values to store randomly chosen first and second indices 
  var firstIndex = 0;
  var secondInex = 0;
  // run code passwordLength times, first randomly choosing which set of characters to use then randomly choosing which character and then adding it to the final string
  for (var i = 0; i < passwordLength; i++) {
    firstIndex = Math.floor(Math.random()*passwordChars.length);
    secondIndex = Math.floor(Math.random()*passwordChars[firstIndex].length);
    password = password + passwordChars[firstIndex][secondIndex];
  }
  // return randomly generated password string
  return password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
