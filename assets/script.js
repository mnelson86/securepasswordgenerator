// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  //Elements
  var passwordText = document.getElementById("password");
  var lengthEl = document.getElementById("length");
  var uppercaseEl = document.getElementById("uppercase");
  var lowercaseEl = document.getElementById("lowercase");
  var numbersEl = document.getElementById("numbers");
  var symbolsEl = document.getElementById("symbols");
  

    var length = parseInt(lengthEl.value);
    var hasLower = lowercaseEl.checked;
    var hasUpper= uppercaseEl.checked;
    var hasNumber= numbersEl.checked;
    var hasSymbol= symbolsEl.checked;  
    
    var password = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
 
    passwordText.value = password;
}
  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 

var randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

function generatePassword(upper, lower, number, symbol, length) { 
  
  var generatedPassword = "";
  
  var typesCount= lower + upper + number + symbol;
  var typesArr= [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

  if(typesCount === 0) {
    return "Nothing Selected";
  }

  for (var i=0; i< length; i++) {
    typesArr.forEach(type => {
      var funcName= Object.keys(type)[0];
      generatedPassword += randomFunction [funcName]();
     console.log(generatedPassword);
    });
    
  }
   
  return password = generatedPassword.slice(0, length); 
}
  // functions to generate the aspects of the password
  function getRandomLower()
    {
      return String.fromCharCode(Math.floor(Math.random()*26)+97);
    
     }
  function getRandomUpper()
    {
      return String.fromCharCode(Math.floor(Math.random()*26)+65);    

     }
  function getRandomNumber()
    {
      return (Math.floor(Math.random()*10));
     }
  function getRandomSymbol()
    {
      var symbols= "!@#$%^&*()_+=<>{}[];"; 
        return symbols[Math.floor(Math.random() * symbols.length)];
        
  
    }
