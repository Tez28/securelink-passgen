// Assignment Code
var generateBtn = document.querySelector("#generate");

// define variables
var special = "!@#$%^&*(";
var numbers = "123456789";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var idenCharacters = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
debugger;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
