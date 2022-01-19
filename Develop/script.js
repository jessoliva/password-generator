// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword () {
  var confirmLength = parseInt(prompt("How many characters would you like your password to be? Input a number. Cannot be less than 8 or greater than 128."));

  if (confirmLength >= 8 && confirmLength <= 128) {
    console.log("User selected a password length = " + confirmLength);
  }
  else {
    alert("Please enter a valid response.");
    generatePassword();
  }

};




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
