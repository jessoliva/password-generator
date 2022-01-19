// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Arrays that hold password character options
var passAlphabet = 'abcdefghijklmnopqrstuvwxyz'; 
var passNumber = '1234567890';
var passSpecial = '!@#$%^&*()_+=[]~"\\';

function generatePassword () {
  // Empty array to push into password character arrays user confirms
  var userSelCha = []; 
  // Final user password
  var userSelPass = [];
  // Counts number of conditions user confirmed
  var numSel = 0;

  // Convert user entered length to integer
  var confirmLength = parseInt(prompt('How many characters would you like your password to be? Input a number. Cannot be less than 8 or greater than 128.'));

  // If user does not select a number --> 8 <= password length <= 128 --> ask again
  if (confirmLength >= 8 && confirmLength <= 128) {
  }
  else {
    alert('Please enter a valid response.');
    generatePassword();
  }

  // Ask user to confirm conditions
  var confirmLowercase = confirm('Would you like to use lowercase letters in your password? Ok = Yes | Cancel = No');
  if (confirmLowercase) {
    // If condition confirmed, push passAlphabet array into userSelCha array
    userSelCha.push(...passAlphabet);
    // To ensure at least 1 character of each condition is included in the password
    numSel++;
    userSelPass.push(random(passAlphabet));
  }

  var confirmUppercase = confirm('Would you like to use uppercase letters in your password? Ok = Yes | Cancel = No');
  if (confirmUppercase) {
    // If condition confirmed, push uppercase version of passAlphabet array into userSelCha array
    userSelCha.push(...passAlphabet.toUpperCase()); 
    numSel++;
    userSelPass.push(random(passAlphabet.toUpperCase()));
  }
  
  var confirmNumber = confirm('Would you like to use numbers in your password? Ok = Yes | Cancel = No');
  if (confirmNumber) {
    // If condition confirmed, push passNumber array into userSelCha array
    userSelCha.push(...passNumber);
    numSel++;
    userSelPass.push(random(passNumber));
  }

  var confirmSpecial = confirm('Would you like to use special characters in your password? Ok = Yes | Cancel = No');
  if (confirmSpecial) {
    // If condition confirmed, push passSpecial array into userSelCha array
    userSelCha.push(...passSpecial);
    numSel++;
    userSelPass.push(random(passSpecial));
  }

  // If user does not select at least one password character condition --> ask again
  if (!confirmLowercase && !confirmUppercase && !confirmNumber && !confirmSpecial) {
    alert('Please select at least one condition for your password.');
    generatePassword();
  }

  // Grab a random character from userSelChar array and push into userSelPass array, loop confirmLength number times
  for (let i = 0; i < confirmLength-numSel; i++) {
    userSelPass.push(random(userSelCha));      

    console.log('password characters include ', userSelPass.join(' '));
  }

  // Call shuffle function to shuffle userSelPass array
  shuffle(userSelPass);

  // Return shuffled userSelPass array converted to string
  return userSelPass.join("");
};

// Select a random index of an array and return value
function random (randArray) {
  var value = randArray[Math.floor(Math.random()*randArray.length)]; //random selected index of array = [Math.floor(Math.random()*array.length)]
  return value;
};

// Shuffle userSelPass array with Fisher-Yates Shuffle
function shuffle(array) {
  // Index used to shuffle with currentIndex
  var randomIndex;

  // This condition & currentIndex -- makes shuffle start with the last value 
  var currentIndex = array.length;

  // While there are remaining elements to shuffle
  while (currentIndex != 0) {

    // Pick a random remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    // Subtract 1 from currentIndex value
    currentIndex--;

    // And swap it with the current element using temp variables
    var temp1 = array[currentIndex];
    var temp2 = array[randomIndex];
    
    array[currentIndex] = temp2;
    array[randomIndex] = temp1;
  };
  return array;
};

// Write password to the #password input
function writePassword() {  
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);