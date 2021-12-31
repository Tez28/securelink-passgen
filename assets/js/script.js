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
// write genereate password function
function createPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Insert generate password call
function generatePassword() {
  
  //insert idenCharacter for randomizing
  var result = "";

  // insert window for password length
  var length = window.prompt("Please select between 8 and 16 chaacters for your password!");
  if(password === "" || password === null) {
    window.alert("You're required to select 8 or 12! Please try again.");
    return generatePassword()
  }

  if(length < 8 || length > 16) {
    window.alert("Please try again. Input 8 or 16.")
    return generatePassword()
  }

  // require user to define password perameters
  var charSpecial = confirm("Add special characters?");
  var charNumbers = confirm("Add numbers?");
  var charUppercase = confirm("Add upper case letters?");
  var charLowercase = confirm("Add lower case letters?");
  
  if(!charSpecial&&!charNumbers&&!charUppercase&&!charLowercase) {
    window.alert("You must select an option!");
    return generatePassword()
  }

  // insert if statement for defined variables

// enter math function
for (var i = 0; i < length; i++) {
  result += idenCharacters.charAt(Math.floor(Math.random() * idenCharacters.length));
}
return result;
}