var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = '';
  var passwordText = document.querySelector("#password");
  // character strings
  var uppercase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  var lowercase = ("abcdefghijklmnopqrstuvwxy");
  var special = ("!%&*+-./<>?~");
  var number = ("0123456789");

  var string1 = "";
  var string2 = "";
  var string3 = "";
  var string4 = "";
  var parameters = "";

  // Length Prompt
  var confirmLength = (prompt("How many characters would you like your password to be? Enter a number 8-128."));
  // Invalid Input
  while (confirmLength <= 8 || confirmLength >= 128) {
    alert("Password length must be between 8-128 characters!")
    var confirmLength = (prompt("How many characters would you like your password to be? Enter a number 8-128."));
  };

  console.log(confirmLength);

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

  if (confirmUpper === true) {
    string1 = uppercase
  };
  if (confirmLower === true) {
    string2 = lowercase
  };
  if (confirmSpecial === true) {
    string3 = special
  };
  if (confirmNumber === true) {
    string4 = number
  };
  parameters = string1 + string2 + string3 + string4
  console.log(parameters)

  // log all selected parameters in console to confirm selections work

  // generate password based on all parameters


  for (var i = 0; i <= confirmLength - 1; i++) {
    var randomPassword = parameters[Math.floor(Math.random() * parameters.length)];
    console.log(randomPassword);
    password += randomPassword;
  }

  passwordText.value = password;
}



generateBtn.addEventListener("click", writePassword);