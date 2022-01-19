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

// Counts number of conditions user confirmed
var numSel = 0;


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

  // Ask user to confirm conditions
  var confirmLowercase = confirm("Would you like to use lowercase letters in your password? Ok = Yes | Cancel = No");
  if (confirmLowercase) {
    // If condition confirmed, push passAlphabet array into userSelCha array
    userSelCha.push(...passAlphabet);
    console.log("userSelCha array = " + userSelCha);

    // To ensure at least 1 character of each condition is included in the password
    numSel++;
    userSelPass.push(random(passAlphabet));
    console.log("userSelPass array = " + userSelPass);
  }

  var confirmUppercase = confirm("Would you like to use uppercase letters in your password? Ok = Yes | Cancel = No");
  if (confirmUppercase) {
    // If condition confirmed, push uppercase version of passAlphabet array into userSelCha array
    userSelCha.push(...passAlphabet.toUpperCase()); 
    console.log("userSelCha array = " + userSelCha);

    numSel++;
    userSelPass.push(random(passAlphabet.toUpperCase()));
    console.log("userSelPass array = " + userSelPass);
  }
  
  var confirmNumber = confirm("Would you like to use numbers in your password? Ok = Yes | Cancel = No");
  if (confirmNumber) {
    // If condition confirmed, push passNumber array into userSelCha array
    userSelCha.push(...passNumber);
    console.log("userSelCha array = " + userSelCha);

    numSel++;
    userSelPass.push(random(passNumber));
    console.log("userSelPass array = " + userSelPass);
  }

  var confirmSpecial = confirm("Would you like to use special characters in your password? Ok = Yes | Cancel = No");
  if (confirmSpecial) {
    // If condition confirmed, push passSpecial array into userSelCha array
    userSelCha.push(...passSpecial);
    console.log("userSelCha array = " + userSelCha);

    numSel++;
    userSelPass.push(random(passSpecial));
    console.log("userSelPass array = " + userSelPass);
  }

  // If user does not select at least one password character condition --> ask again
  if (!confirmLowercase && !confirmUppercase && !confirmNumber && !confirmSpecial) {
    alert("Please select at least one condition for your password.");
    generatePassword();
  }

  // Grab a random character from userSelChar array and push into userSelPass array, loop confirmLength number times
  for(let i = 0; i < confirmLength; i++){
    userSelPass.push(random(userSelCha));      

    console.log('password characters include ', userSelPass.join(" "))
  }

};

// Select a random index of an array and return value
function random (randArray) {
  var value = randArray[Math.floor(Math.random()*randArray.length)]; //random selected index of array = [Math.floor(Math.random()*array.length)]
  return value;
};




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
