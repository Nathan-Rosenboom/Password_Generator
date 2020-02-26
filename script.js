// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (var incNum = true){
    
  }

  passwordText.value = password;

}
var incNum = confirm("Include numbers?");
var incUpper = confirm("Include upper case letters?");
var incLower = confirm("Include lowercase letters?");
var incSpecial = confirm("Include special characters?");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
