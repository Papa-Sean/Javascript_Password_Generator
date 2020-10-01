// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//added an "alert" prompt to test by event listener button//
function prompt1() {
    alert ("Hello World!");
  }
// Add event listener to generate button
generateBtn.addEventListener("click", prompt1);
