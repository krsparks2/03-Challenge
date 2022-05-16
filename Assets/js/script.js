// Assignment Code
var generateBtn = document.querySelector("#generate");
var generateBtnCopy = document.querySelector("#copy");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var symbols = "`~!@#$%^&*()_-+={}|[]\:;'<,>.?/".split("");
var numbers = "0123456789".split("");
var password = "";

// Write password to the #password input
function generatePassword()
{
  var passwordLength = prompt("Enter Password Length", "");
  if (passwordLength > 8 && passwordLength < 128)
  {
    var passwordCase = confirm("Use upper case letters?");
    var passwordSymbols = confirm("Use special characters?");
    var passwordNumbers = confirm("Use numbers?");
    if (passwordCase && passwordSymbols && passwordNumbers === true)
    {
      for (i = 0; i < passwordLength; i++) 
      {
        password = Math.floor(Math.random() * passwordLength);
        JSON.stringify(password)
        console.log(password);
      }
    }
  }
  else
  {
    alert("Please enter a number between 8 and 128.");
  } 
  // console.log(passwordLength); 
  // console.log(passwordCase); 
  // console.log(passwordSymbols); 
  // console.log(passwordNumbers);
  
 
  return generatedpassword;
};

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;

// }
  

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword){

// };



// var arr = [1,2,3,4];
// var randNum = Math.floor(Math.random()*4);
// arr[Math.floor(Math.random()*arr.length)];

// var arrTwo = "0123456789".split("") 