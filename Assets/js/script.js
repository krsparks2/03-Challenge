// Assignment Code
var generateBtn = document.querySelector("#generate");
var generateBtnCopy = document.querySelector("#copy");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var symbols = "`~!@#$%^&*()_-+={}|[]\:;'<,>.?/";
var numbers = "0123456789";

function passwordFormat()
{
  var passwordLength = prompt("Enter Password Length", "");
  var passwordCase = confirm("Use upper and lower case letters?");
  var passwordSymbols = confirm("Use special characters?");
  var passwordNumbers = confirm("Use numbers?");  
  console.log(passwordLength); 
  console.log(passwordCase); 
  console.log(passwordSymbols); 
  console.log(passwordNumbers);
  if (passwordLength > 8 && passwordLength < 128)
  {
    console.log("Blue");
    if (passwordCase === true)
    {
      console.log("Yellow");
      if (passwordSymbols === true)
      {
        console.log("Red");
        if (passwordNumbers === true)
        {
          console.log("Purple")
        }
      }
    }
    else
    {
      console.log("Boo")
    }
  }
  // for (i = 0; i < passwordLength; i++) 
  // {
  //     Math.floor(Math.random() * passwordLength);
  // }
}	



// Write password to the #password input
//funtion generatePassword(){console.log("click to generate password") return generatedpassword;};

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }
  

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword){

//};

