// Assignment Code
var generateBtn = document.querySelector("#generate");
var charLetters = "abcdefghijklmnopqrstuvwxyz"
var charLettersUpper = charLetters.toUpperCase();
var charNumber = "1234567890"
var charSpecial = " ~!@#$%^&*()_+{}[]:;'|\<>?,./"
console.log(charLettersUpper)
// Function begins
function writePassword() {
// Function prompts
  var length = window.prompt("How long would you like your password? Must be between 8 and 128 characters.");
    if (!length) {
      alert("Please choose a number between 8 and 128.")
    } else if (length < 8 || length > 128)  {
      var length = window.prompt("The number you choose must be between 8 and 128 characters")
    }
  

  var upper = window.confirm("Would you like uppercase letters in your password?")


  var lower = window.confirm("Would you like lowercase letters in your password?")


  var numbers = window.confirm("Would you like numbers in your password?")


  var special = window.confirm("Would you like special characters in your password?")


  var newPassword = "";
  while (length <= 8 || length >= 128) {
    if (!length) {
      alert("Please choose a number between 8 and 128.")
    }
  }
console.log(length)




  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
