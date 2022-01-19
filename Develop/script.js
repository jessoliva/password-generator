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

  var confirmLowercase = confirm("Would you like to use lowercase letters in your password? Ok = Yes | Cancel = No");
  var confirmUppercase = confirm("Would you like to use uppercase letters in your password? Ok = Yes | Cancel = No");
  var confirmNumber = confirm("Would you like to use numbers in your password? Ok = Yes | Cancel = No");
  var confirmSpecial = confirm("Would you like to use special characters in your password? Ok = Yes | Cancel = No");

  if (!confirmLowercase && !confirmUppercase && !confirmNumber && !confirmSpecial) {
    alert("Please select at least one condition for your password.");
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
