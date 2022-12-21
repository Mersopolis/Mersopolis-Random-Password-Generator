// Defined character groups for password criteria
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var special = [" ","!",'"',"#","$","%","&","'","(",")","*","+",',',"-",".",'/',":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

var generatePassword = function() {
  // Clear arrays from previous generations
  var criteria = [];
  var generation = [];
  // Password generation part 1: Uppper case letters
  var includeUpper = confirm("Would you like to include upper case letters?");
  if (includeUpper == true) {
    criteria = criteria.concat(upperCase);
    includeLower;
  }
  else {
    includeLower;
  }
  includeUpper;
  /* DEBUG COMMAND
  //console.log(criteria);
  DEBUG COMMAND */
  // Password generation part 2: Lower case letters
  var includeLower = confirm("Would you like to include lower case letters?");
  if (includeLower == true) {
    criteria = criteria.concat(lowerCase);
    includeNumbers;
  }
  else {
    includeNumbers;
  }
  /* DEBUG COMMAND
  //console.log(criteria);
  DEBUG COMMAND */
  // Password generation part 3: Numbers
  var includeNumbers = confirm("Would you like to include numbers?");
  if (includeNumbers == true) {
    criteria = criteria.concat(numbers);
    includeSpecial;
  }
  else {
    includeSpecial;
  }
  /* DEBUG COMMAND
  //console.log(criteria);
  DEBUG COMMAND */
  // Password generation part 4: Special characters
  var includeSpecial = confirm("Would you like to include special characters?");
    // End function if no character groups were included
  if (includeUpper == false && includeLower == false && includeNumbers == false && includeSpecial == false) {
    alert("Please include at least one group of characters");
    return;
  }
  else if (includeSpecial == true) {
    criteria = criteria.concat(special);
    defineLength;
  }
  else {
    defineLength;
  }
  /* DEBUG COMMAND
  console.log(criteria);
  DEBUG COMMAND */
  // Password generation part 5: Length
  var defineLength = prompt("How many characters long should the password be? (Type a whole number from 8 to 128. Otherwise, the length will be randomized.)");
    // Randomized length
  if (defineLength < 8 || defineLength > 128 || defineLength % 1 != 0) {
      min = 8;
      max = 128;
      defineLength = Math.floor(Math.random() * (max - min + 1) + min);
      /* DEBUG COMMAND
      //console.log(defineLength);
      DEBUG COMMAND */
      for (var i = 0; i < defineLength; i++) {
        var r = Math.floor(Math.random() * criteria.length);
        var randomChar = criteria[r];
        generation = generation.concat(randomChar);
        generation = generation.toString();
      }
    }
    // Defined length
  else {
    /* DEBUG COMMAND
    //console.log(defineLength);
    DEBUG COMMAND */
    for (var i = 0; i < defineLength; i++) {
    var r = Math.floor(Math.random() * criteria.length);
    var randomChar = criteria[r];
      generation = generation.concat(randomChar);
      generation = generation.toString();
    }
  }
  /* DEBUG COMMAND
  console.log(generation);
  DEBUG COMMAND */
  return generation;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);