// Assignment Code
var generateBtn = document.querySelector("#generate");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(" "); // Array of uppercase characters
var lower = "abcdefghijklmnopqrstuvwxyz".split(" "); // Array of lowercase characters
var num = "0123456789".split(" "); // Array of digits
var special = "!#$%&')*+-./:;<=>?@[]^_`{}|~".split(" "); // Array of special characters
var pwordLength = prompt("Enter password length. Must be a number betwen 8 - 128"); // Store user input as password length
var incNum = confirm("Include numbers?"); // return boolean value for number array to be included in generator function
var incUpper = confirm("Include uppercase letters?"); // return boolean value for uppercase array to be included in generator function
var incLower = confirm("Include lowercase letters?"); // return boolean value for lowercase array to be included in generator function
var incSpecial = confirm("Include special characters?"); // return boolean value for special array to be included in generator function
function generatePassword(){
  var userPassword = "";
  var incChars = ""; //creates a combined array using any returned booleans with a true value 
  if (incUpper == true) {
    incChars += upper;
  }
  if (incLower == true) {
    incChars += lower;
  }
  if (incNum == true) {
    incChars += num;
  }
  if (incSpecial == true) {
    incChars += special;
  }
 
  for (var i = 0; i < pwordLength; i++) { // continues generating random charaters from the incChars array until i = pword length
    userPassword += incChars.charAt(
      Math.floor(Math.random() * incChars.length)
    );
  }
  return (userPassword); // Display the generated password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generatePassword();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
