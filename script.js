// Define character groups for password criteria
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var special = [" ","!","#","$","%","&","'","(",")","*","+",',',"-",".",'/',":",";","<","=",">","?","@","[",'\'',"]","^","_","`","{","|","}","~"];
var doublequote = ["\""];
var criteria = [];
var password = [];

var generatePassword = function() {
  // Password generation part 1: Uppper case letters
  var criteriaUpper = confirm("Would you like to include upper case letters?");
  if (criteriaUpper == true) {
    criteria = criteria.concat(upperCase);
    criteriaLower;
  }
  else {
    criteriaLower;
  }
  criteriaUpper;
  console.log(criteria);
  // Password generation part 2: Lower case letters
  var criteriaLower = confirm("Would you like to include lower case letters?");
  if (criteriaLower == true) {
    criteria = criteria.concat(lowerCase);
    criteriaNumbers;
  }
  else {
    criteriaNumbers;
  }
  console.log(criteria);
  // Password generation part 3: Numbers
  var criteriaNumbers = confirm("Would you like to include numbers?");
  if (criteriaNumbers == true) {
    criteria = criteria.concat(numbers);
    criteriaSpecial;
  }
  else {
    criteriaSpecial;
  }
  console.log(criteria);
  // Password generation part 4: Special characters
  var criteriaSpecial = confirm("Would you like to include special characters?");
  if (criteriaSpecial == true) {
    criteria = criteria.concat(special, doublequote);
    criteriaLength;
  }
  else {
    criteriaLength;
  }
  console.log(criteria);
  // Password generation part 5: Length
  var criteriaLength = prompt("How many characters long should it be? (Only type whole numbers from 8 to 128 or leave blank for a random amount)");
    console.log(typeof criteriaLength);
    console.log(criteriaLength);
  if (criteriaLength == "") {
      min = Math.ceil(8);
      max = Math.floor(128);
      criteriaLength = Math.floor(Math.random() * (max - min + 1) + min);
      for (var i = 0; i < criteriaLength; i++) {
        var r = Math.floor(Math.random() * criteriaLength);
        var randomChar = criteria[r];
        password = password.concat(randomChar);
        password = password.toString();
      }
    }
  else if (criteriaLength < 8 || criteriaLength > 128 || criteriaLength % 1 != 0) {
    criteriaLength;
  }
  else {
    for (var i = 0; i < criteriaLength; i++) {
    var r = Math.floor(Math.random() * criteriaLength);
    var randomChar = criteria[r];
      password = password.concat(randomChar);
      password = password.toString();
    }
  }
  console.log(password);
  criteria = [];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
password = [];
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
