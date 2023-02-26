// Arrays
var generateBtn = document.querySelector("#generate");
var charLettersLower = [
  "a",
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
  "z",
];
var charLettersUpper = [
  "A",
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
  "Z",
];
var charNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var charSpecial = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "{",
  "}",
  "[",
  "]",
  ":",
  ";",
  "'",
  "|",
  "<",
  ">",
  "?",
  ",",
  ".",
  "/",
];

// Variables
var concatPassword = "";
var setLength = "";
var addUpper;
var addLower;
var addNumbers;
var addSpecial;

// Function begins
function generatePassword() {
  // Length
  var setLength = window.prompt(
    "How long would you like your password? Must be between 8 and 128 characters."
  );
  setLength = parseInt(setLength);

  if (!setLength) {
    window.alert("Please choose a number between 8 and 128.");
    return "Please try again.";
  } else if (setLength < 8 || setLength > 128) {
    window.alert("Please choose a number between 8 and 128.");
    return "Please try again.";
    //character selection confirmation
  } else {
    var addUpper = window.confirm(
      "Would you like uppercase letters in your password?"
    );
    var addLower = window.confirm(
      "Would you like lowercase letters in your password?"
    );
    var addNumbers = window.confirm("Would you like numbers in your password?");
    var addSpecial = window.confirm(
      "Would you like special characters in your password?"
    );
    // if all false, ask questions again
    while (
      addUpper === false &&
      addLower === false &&
      addNumbers === false &&
      addSpecial === false
    ) {
      window.alert("Please choose at least one variable.");
      var addUpper = window.confirm(
        "Would you like uppercase letters in your password?"
      );
      var addLower = window.confirm(
        "Would you like lowercase letters in your password?"
      );
      var addNumbers = window.confirm(
        "Would you like numbers in your password?"
      );
      var addSpecial = window.confirm(
        "Would you like special characters in your password?"
      );
    }
  }

  // character type selection
  var concatPassword = [];
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

  // Joining the concat arrays
  var joinedConcat = concatPassword.join("");

  // Randomization
  var newPassword = "";

  for (let i = 0; i < setLength; i++) {
    newPassword +=
      joinedConcat[Math.floor(Math.random() * joinedConcat.length)];
  }
  return newPassword;
}

// Writes password in HTML
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
