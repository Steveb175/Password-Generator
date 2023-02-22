// Assignment Code
var generateBtn = document.querySelector("#generate");
var charLettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charLettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var charNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var charSpecial = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "{", "}", "[", "]", ":", ";", "'", "|", "<", ">", "?", ",", ".", "/"];
var concatPassword = "";
// Function begins
function writePassword() {
// Length
  var setLength = window.prompt("How long would you like your password? Must be between 8 and 128 characters.");
    if (!setLength) {
      window.prompt("Please choose a number between 8 and 128.");

    } else if (setLength < 8 || setLength > 128)  {
      var length = window.prompt("The number you choose must be between 8 and 128 characters");
//character selection confirmation
    } else {
      var addUpper = window.confirm("Would you like uppercase letters in your password?");
      var addLower = window.confirm("Would you like lowercase letters in your password?");
      var addNumbers = window.confirm("Would you like numbers in your password?");
      var addSpecial = window.confirm("Would you like special characters in your password?");
     };

//character type selection
     if (addUpper) {
      concatPassword = concatPassword.concat(charLettersUpper);
     }
     if (addLower) {
      concatPassword = concatPassword.concat(charLettersLower);
     }
     if (addNumbers) {
      concatPassword = concatPassword.concat(charNumber);
     }
     if (addSpecial) {
      concatPassword = concatPassword.concat(charSpecial);
     }
     
//Randomization
     var newPassword = "";

     for (var i = 0; i < length; i++);
      var newPassword = newPassword + concatPassword[Math.floor(Math.random() * concatPassword.length)];

//test console logs
console.log(setLength);
console.log(newPassword);
console.log(concatPassword)



  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
