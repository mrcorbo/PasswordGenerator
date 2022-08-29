// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var passLength = prompt("Password must be between 8 & 128 characters, please input length:");
  // If statement to make sure that length of password is valid, then select criteria.
  if (passlength >= 8 && passlength <= 128) {
    var lowercase = confirm("Does this password contain lowercase letters?");
    var capital = confirm("Does this password contain capital letters?");
    var number = confirm("Does this password contain numbers?");
    var specialChar = confirm("Does this password contain special characters?")
  }
  else{
    alert("Please enter a valid password length (between 8 & 128):");
    return generatePassword();
  }  
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
