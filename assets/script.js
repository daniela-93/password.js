// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  function getRandomUpperCase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
   }
   function getRandomLowerCase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
 }
 function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
 }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
