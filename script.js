// Define character groups for password criteria
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var special = [" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
var criteria = [];


// Password generation part 5: Length
var criteriaLength = function() {
  window.prompt("How many characters long should it be? (Only type whole numbers from 8 to 128 or 'random')")
}
if (typeof criteriaLength == "string") {
  criteriaLength = criteriaLength.toLowerCase();
  if (criteriaLength = "random") {

  }
}
else if (typeof criteriaLength != "number" || criteriaLength < 8 || criteriaLength > 128 || criteriaLength % 1 != 0) {

}
else {

}
// Password generation part 4: Special characters
var criteriaSpecial = function() {
window.confirm("Would you like to include special characters?");
}
if (criteriaSpecial = true) {
  criteria.push(special);
  criteriaLength();
}
else {
  criteriaLength();
}
// Password generation part 3: Numbers
var criteriaNumbers = function() {
window.confirm("Would you like to include numbers?");
}
if (criteriaNumbers) {
  criteria.push(numbers);
  criteriaSpecial();
}
else {
  criteriaSpecial();
}
// Password generation part 2: Lower case letters
var criteriaLower = function() {
  window.confirm("Would you like to include lower case letters?");
}
if (criteriaLower) {
  criteria.push(lowerCase);
  criteriaNumbers();
}
else {
  criteriaNumbers();
}
// Password generation part 1: Uppper case letters
var generatePassword = function() {
  window.confirm("Would you like to include upper case letters?");
}
if (generatePassword) {
  criteria.push(upperCase);
  criteriaLower();
}
else {
  criteriaLower();
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
