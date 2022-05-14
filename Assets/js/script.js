// Assignment Code
var generateBtn = document.querySelector("#generate");
var generateBtnCopy = document.querySelector("#copy");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var symbols = "`~!@#$%^&*()_-+={}|[]\:;'<,>.?/";
var numbers = "0123456789";

function passwordSize()
{
  var passwordLength = prompt("Enter Password Length", "8-128 characters");
  var passwordCase = confirm("Use upper and lower case letters?");
  var passwordSymbols = confirm("Use special characters?");
  var passwordNumbers = confirm("Use numbers?");  
  console.log(passwordLength); 
  console.log(passwordCase); 
  console.log(passwordSymbols); 
  console.log(passwordNumbers);
}	


// function passwordSize() {
//   passwordLength = prompt("Enter Password Length", "8-128 characters");
//   return passwordLength;
// }




// var chars ="lkajsgfdbnx"
// var charsArr = chars.split('');
// console.log(charsArr);



// Write password to the #password input
//funtion generatePassword(){console.log("click to generate password") return generatedpassword;};

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

   passwordText.value = password;

 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

