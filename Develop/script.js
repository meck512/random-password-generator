// Assignment code here

// character Arrays
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = ["!", "@", "#", "$", "^", "=", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// var declatarions
var confirmLength = "";
var confirmUpper;
var confirmLower;
var confirmSpecial;
var confirmNumber;


  // Length Prompt
  var confirmLength = (prompt("How many characters would you like your password to be? Enter a number 8-128."));
  // Invalid Input
  while (confirmLength <= 8 || confirmLength >= 129) {
    alert("Password length must be between 8-128 characters!")
    var confirmLength = (prompt("How many characters would you like your password to be? Enter a number 8-128."));
  };

  // Password confirm parameters
  var confirmUpper = confirm("Include UPPERCASE letters?");
  var confirmLower = confirm("Include lowercase letters?");
  var confirmSpecial = confirm("Include special characters?");
  var confirmNumber = confirm("Include numbers?");

  // If no parameters are chosen, alert & loop
  while (confirmUpper === false && confirmLower === false && confirmSpecial === false && confirmNumber === false) {
    // if all false, alert user
    alert("Please choose at least one parameter for your password!");
    // loop Password parameters
    var confirmUpper = confirm("Include UPPERCASE letters?");
    var confirmLower = confirm("Include lowercase letters?");
    var confirmSpecial = confirm("Include special characters?");
    var confirmNumber = confirm("Include numbers?");
  }

var parameters = []

if (confirmUpper) {
parameters = parameters.concat(uppercase)
}
if(confirmLower) {
  parameters = parameters.concat(lowercase)
}
if(confirmSpecial) {
  parameters = parameters.concat(special)
}
if(confirmNumber) {
  parameters = parameters.concat(number)
}
// log all selected parameters in console to confirm selections work
console.log(parameters)

// generate password based on all parameters
var generatePassword = ""
for (var i = 0; i < confirmLength; i++) {
  generatePassword = generatePassword + parameters[Math.floor(Math.random() * confirmLength.length)];
}

console.log(generatePassword)

  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
