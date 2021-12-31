// Assignment Code
var generateBtn = document.querySelector("#generate");

// define variables
var special = ["!@#$%^&*("];
var numbers = ["123456789"];
var upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lower = ["abcdefghijklmnopqrstuvwxyz"];
// var idenCharacters = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// debugger;
// write genereate password function
// function createPassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
  
//   passwordText.value = password;
// }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Insert generate password call
function generatePassword() {
  
  //insert idenCharacter for randomizing
  var idenCharacters = [""];

  // insert window for password length
  var length = window.prompt("Please select between 8 and 16 chaacters for your password!");

  if(length < 8 || length > 16) {
    window.alert("Please try again. Input 8 or 16.")
    generatePassword()
  }

  
  // insert if statements for defined variables
  var charSpecial = confirm("Add special characters?");

  if (charSpecial) {
    idenCharacters += special;
  }
  console.log (idenCharacters)

  var charNumbers = confirm("Add numbers?");

  if (charNumbers) {
    idenCharacters += numbers;
  }
  console.log (idenCharacters)

  var charUppercase = confirm("Add upper case letters?");
  if (charUppercase) {
    idenCharacters += upper;
  }
  console.log (idenCharacters)

  var charLowercase = confirm("Add lower case letters?");
  if (Lowercase) {
    idenCharacters += lower
  }
  console.log (idenCharacters)
  
  // require user to define password perameters
  if(!charSpecial&&!charNumbers&&!charUppercase&&!charLowercase) {
    window.alert("You must select an option!");
    generatePassword()
  }




// enter math function
  for (var i = 0; i < length; i++) {
    result += idenCharacters.charAt(Math.floor(Math.random() * idenCharacters.length));
  }
return idenCharacters;
}