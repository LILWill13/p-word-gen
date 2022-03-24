// Assignment Code
const openPopButtons = document.querySelectorAll('[data-pop-target]')
const clsPopButtons = document.querySelectorAll('[data-cls-btn]')
const overlay = document.getElementById('overlay')

const randomCharacter = "abcdefghijklmnopqrstuvwxyz"
const randomSpecial = "!#$%&*-_+()^~@"

const alpha = randomCharacter[Math.floor(Math.random() * randomCharacter.length)];
const alphaUp = randomCharacter[Math.floor(Math.random() * randomCharacter.length)].toUpperCase();
const ranChar = randomSpecial[Math.floor(Math.random() * randomSpecial.length)];
const number = Math.floor(Math.random() * 10);


const funcs = {
  alpha: alpha,
  alphaUp: alphaUp,
  ranChar: ranChar,
  number: number,
}

openPopButtons.forEach(button => {
  button.addEventListener('click',() => {
    const criteria = document.querySelector(button.dataset.popTarget)
    openPop(criteria)
  })
})

overlay.addEventListener('click', () => {
  const pop = document.querySelectorAll('#criteria.active')
  pop.forEach(criteria => {
    clsPop(criteria)
  })
})

clsPopButtons.forEach(button => {
  button.addEventListener('click',() => {
    const criteria = button.closest('#criteria')
    clsPop(criteria)
  })
})

function openPop(criteria) {
  if(criteria === null) return
  criteria.classList.add('active')
  overlay.classList.add('active')
}

function clsPop(criteria) {
  if(criteria === null) return
  criteria.classList.remove('active')
  overlay.classList.remove('active')
}


// generateBtn is linked to the submit button
var generateBtn = document.querySelector("#submit");

const form = document.getElementById('buttons');
const length = document.getElementById('length'); 
const lowercase = document.getElementById("lowercase"); 
const uppercase = document.getElementById('uppercase'); 
const numeric = document.getElementById('numeric'); 
const special = document.getElementById('special-char');  



form.addEventListener('submit', () => {
    const lengthValue = +length.value
    const lowerCheck = lowercase.checked
    const upperCheck = uppercase.checked
    const numericCheck = numeric.checked
    const speicalChecked = special.checked

   generatePassword(lowerCheck, upperCheck, numericCheck, speicalChecked, lengthValue);
});

function generatePassword(alpha, alphaUp, number, ranChar, length) {

    let generatedPassword ="";

    const allCriteria = alpha + alphaUp + number + ranChar;

    const  criteriaArr = [{alpha}, {alphaUp}, {number}, {ranChar}].filter(item =>  Object.values(item)[0]);

    if (allCriteria === 0) {
       alert('Set requirements');
    } else if (length < 8 || length > 128) {
      alert('Length must be between 8 & 128 characters');
    };



    for(i = 0; i < length; i += allCriteria){
      criteriaArr.forEach(type => {
        const funcName = Object.keys(type)[0];
          
        generatedPassword += funcs[funcName];
    
      });
    }

  const final = generatedPassword.slice(0,length);
  alert(final)
  return final;
}

 
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
form.addEventListener("click", writePassword())

form.addEventListener('submit',(e) =>{
  e.preventDefault();
});