// Assignment Code

const randomLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

const randomSpecial = ['!','#','$','%','&','*','-','+','(',')','^','~','@']

const randomUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','v','W','X','Y','Z']

const nums = ['1','2','3','4','5','6','7','8','9']
 
// const alpha = randomCharacter[Math.floor(Math.random() * randomCharacter.length)];
// const alphaUp = randomCharacter[Math.floor(Math.random() * randomCharacter.length)].toUpperCase();
// const ranChar = randomSpecial[Math.floor(Math.random() * randomSpecial.length)];
// const number = Math.floor(Math.random() * 10);



// generateBtn is linked to the submit button
var generateBtn = document.querySelector("#generate");

function getPasswordOptions() {
  var length = parseInt(
    prompt('How many characters do you want your password?')
  );
  if(Number.isNaN(length)){
    alert('Password Length must be a number!')
    return null;
  } 

  if(length < 8){
    alert('Password length must atleast 8 characters')
    getPasswordOptions()
  }

  if(length > 128){
    alert('Password length must atmost 128 characters')
    getPasswordOptions()
  }

  var hasNums = confirm('Click ok to include nubers')
  var hasRandomLower = confirm('Click ok to include lowercase letters')
  var hasRandomUpper = confirm('Click ok to include uppercase letters')
  var hasRandomSpecial = confirm('Click ok to include special characters')
  
  if(!hasNums && !hasRandomLower && !hasRandomUpper && !hasRandomSpecial){
    alert('Must chose atleast one option')
    return null
  }

  const passwordOptions = {
    length: length,
    hasRandomSpecial: hasRandomSpecial,
    hasRandomLower: hasRandomLower,
    hasRandomUpper: hasRandomUpper,
    hasNums: hasNums,
  };
 
  return passwordOptions
}

// function getRandom(arr){
//   var randomIndex = math.floor(math.random() * arr.length);
//   var randomEl = arr[randomIndex];
//   return randomEl
// }




function generatePassword() {
  var options = getPasswordOptions()
  const avaiableChars = [
    ...(options.hasRandomLower ? randomLower : []),
    ...(options.hasRandomUpper ? randomUpper : []),
    ...(options.hasRandomSpecial? randomSpecial : []),
    ...(options.hasNums ? nums : []),
  ]

  let pass = '';

  for(let i = 0; i < options.length; i++){
   const randomIndex = Math.floor(Math.random() * avaiableChars.length)
   pass += avaiableChars[randomIndex];
  }
  return pass
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
