// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Arrays that hold password character options
var passAlphabet = "abcdefghijklmnopqrstuvwxyz"; 
var passNumber = "1234567890";
var passSpecial = "!@#$%^&*()_+=[]~'\\";

// Empty array to push into password character arrays user confirms
var userSelCha = []; 

// Final user password
var userSelPass = [];


function generatePassword () {
  // Convert user entered length to integer
  var confirmLength = parseInt(prompt("How many characters would you like your password to be? Input a number. Cannot be less than 8 or greater than 128."));

  // If user does not select a number --> 8 <= password length <= 128 --> ask again
  if (confirmLength >= 8 && confirmLength <= 128) {
    console.log("User selected a password length = " + confirmLength);
  }
  else {
    alert("Please enter a valid response.");
    generatePassword();
  }

  // Ask user to confirm conditions, if condition confirmed, push that array into userSelCha array
  var confirmLowercase = confirm("Would you like to use lowercase letters in your password? Ok = Yes | Cancel = No");
  if (confirmLowercase) {
    userSelCha.push(...passAlphabet);
    console.log("userSelPass array = " + userSelPass);
  }

  var confirmUppercase = confirm("Would you like to use uppercase letters in your password? Ok = Yes | Cancel = No");
  if (confirmUppercase) {
    // Push uppercase version of passAlphabet array
    userSelCha.push(...passAlphabet.toUpperCase()); 
    console.log("userSelPass array = " + userSelPass);
  }
  
  var confirmNumber = confirm("Would you like to use numbers in your password? Ok = Yes | Cancel = No");
  if (confirmNumber) {
    userSelCha.push(...passNumber);
    console.log("userSelPass array = " + userSelPass);
  }

  var confirmSpecial = confirm("Would you like to use special characters in your password? Ok = Yes | Cancel = No");
  if (confirmSpecial) {
    userSelCha.push(...passSpecial);
    console.log("userSelPass array = " + userSelPass);
  }

  // If user does not select at least one password character condition --> ask again
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
