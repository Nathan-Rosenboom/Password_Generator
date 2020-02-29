// Assignment Code
var generateBtn = document.querySelector("#generate");
// Declare arrays of character types
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(" ");
var lower = "abcdefghijklmnopqrstuvwxyz".split(" ");
var num = "0123456789".split(" ");
var special = "!#$%&')*+-./:;<=>?@[]^_`{}|~".split(" ");
var pwordLength = prompt("Enter password length. Must be a number betwen 8 - 128");
// Check to make sure password is of a valid length
if (pwordLength < 8 || pwordLength > 128){
  alert("Please enter a valid number");
}
// If password length is valid prompt user for types of characters to include
else{
  var incNum = confirm("Include numbers?");
  var incUpper = confirm("Include uppercase letters?");
  var incLower = confirm("Include lowercase letters?");
  var incSpecial = confirm("Include special characters?");
}
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
