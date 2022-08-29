function generatePassword(){
  var passLength = prompt("Password must be between 8 & 128 characters, please input length:");
  // If statement to make sure that length of password is valid, then select criteria.
  if (passLength >= 8 && passLength <= 128) {
    var lowercase = confirm("Does this password contain lowercase letters?");
    var capital = confirm("Does this password contain capital letters?");
    var number = confirm("Does this password contain numbers?");
    var specialChar = confirm("Does this password contain special characters?");
  }
  else{
    alert("Please enter a valid password length (between 8 & 128):");
    return generatePassword();
  }  
//Creating arrays based on inputs from user
  if (lowercase===true){
    lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  }else if(lowercase===false){
    lowercase = [""];
  }
  if (capital===true){
    capital = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  }else if(capital===false){
    capital = [""];
  }
  if (number===true){
    number = ["1","2","3","4","5","6","7","8","9","0"];
  }else if(number===false){
    number = [""];
  }
  if (specialChar===true){
    specialChar = ["!","@","#","$","%","^","&","*","/","?","(",")","-","=","+"];
  }else if(specialChar===false){
    specialChar = [""];
  }
//establish new array based on user input.
var inputRand = lowercase + num + lowercase + capital;
//for loop to generate password based on user input.
for (var i=0; i<passLength; i++){
  var randomChar = getRandom(inputRand);
  result.push(randomChar);
}
return result.join("");
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
