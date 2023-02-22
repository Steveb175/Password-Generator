// Assignment Code
var generateBtn = document.querySelector("#generate");
var charLettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charLettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var charNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var charSpecial = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "{", "}", "[", "]", ":", ";", "'", "|", "<", ">", "?", ",", ".", "/"];
var newPassword = "";
// Function begins
function writePassword() {
// Length
  var length = window.prompt("How long would you like your password? Must be between 8 and 128 characters.");
    if (!length) {
      alert("Please choose a number between 8 and 128.");

    } else if (length < 8 || length > 128)  {
      var length = window.prompt("The number you choose must be between 8 and 128 characters");

    } else {
      var upper = window.confirm("Would you like uppercase letters in your password?");
      var lower = window.confirm("Would you like lowercase letters in your password?");
      var numbers = window.confirm("Would you like numbers in your password?");
      var special = window.confirm("Would you like special characters in your password?");
     }

console.log(length)
console.log(newPassword)




  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
