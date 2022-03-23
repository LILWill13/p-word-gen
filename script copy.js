// Assignment Code
// generateBtn is linked to the button
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)

const openPopButtons = document.querySelectorAll('[data-pop-target]')
const clsPopButtons = document.querySelectorAll('[data-cls-btn]')
const overlay = document.getElementById('overlay')

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

// Write password to the #password input
// function writePassword() {

//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", function showPassword(){
//   console.log(writePassword())
// });





// console.log()