// Assignment Code
var generateBtn = document.querySelector("#generate");

// define variables
const special = ["!",
"@",
"#",
"$",
"%",
"^",
"&",
"*",
"("];
const numbers = ["1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9"];
const upper = ["A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z"];

const lower = ["a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"];
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
    idenCharacters = idenCharacters + special.join("");
  }
  console.log(idenCharacters)

  var charNumbers = confirm("Add numbers?");
  if (charNumbers) {
    idenCharacters = idenCharacters + numbers.join("");
  }
  console.log(idenCharacters)

  var charUppercase = confirm("Add upper case letters?");
  if (charUppercase) {
    idenCharacters = idenCharacters + upper.join("");
  }
  console.log(idenCharacters)

  var charLowercase = confirm("Add lower case letters?");
  if (charLowercase) {
    idenCharacters = idenCharacters + lower.join("")
  }
  console.log(idenCharacters)
  
  // require user to define password perameters
  if(!charSpecial&&!charNumbers&&!charUppercase&&!charLowercase) {
    window.alert("You must select an option!");
    generatePassword()
  }


var password = ""

// enter math function
  for (var i = 0; i < length; i++) {
    password = password + idenCharacters [(Math.floor(Math.random() * idenCharacters.length))];
  }
return password;
}