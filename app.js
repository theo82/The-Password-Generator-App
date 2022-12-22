const rangeCharacters = document.getElementById('range-char')
const numberCharacters = document.getElementById('number-char')
const formContainer = document.querySelector('#password-form')
const numbersEl = document.querySelector('#numbers')
const symbolsEl = document.querySelector('#symbols')
const upperCaseEl = document.querySelector('#uppercase')
const passwordDisplay = document.querySelector('#password-display')

const lowercaseCharCodes = arrayLowToHigh(97, 122)
const numberCharCodes = arrayLowToHigh(48, 57)
const symbolCharCodes = arrayLowToHigh(33, 47)
  .concat(58, 64)
  .concat(91, 96)
  .concat(123, 126)
const uppercaseCharCodes = arrayLowToHigh(65, 90)

//Synchronizing Range and Number Inputs
rangeCharacters.addEventListener('input', syncCharAmount)
numberCharacters.addEventListener('input', syncCharAmount)

function syncCharAmount(e) {
  console.log(e)
  const valueAmount = e.target.value
  rangeCharacters.value = valueAmount
  numberCharacters.value = valueAmount
}

// Generating the password when the form
formContainer.addEventListener('submit', function (e) {
  e.preventDefault()

  const characterAmount = numberCharacters.value
  const includeUpperCase = upperCaseEl.checked
  const includeNumbers = numbersEl.checked
  const includeSymbols = symbolsEl.checked

  const password = generatePassword(
    characterAmount,
    includeUpperCase,
    includeNumbers,
    includeSymbols
  )
  passwordDisplay.innerHTML = password
})

function generatePassword(
  characterAmount,
  includeUpperCase,
  includeNumbers,
  includeSymbols
) {
  // console.log(lowercaseCharCodes)
  let charCodes = lowercaseCharCodes

  if (includeNumbers) charCodes = charCodes.concat(numberCharCodes)
  if (includeSymbols) charCodes = charCodes.concat(symbolCharCodes)
  if (includeUpperCase) charCodes = charCodes.concat(uppercaseCharCodes)

  const passwordCharacters = []
  for (let h = 0; h < characterAmount; h++) {
    let characterCodes = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCodes))
  }

  console.log(passwordCharacters)
  return passwordCharacters.join('')
}
// Character Codes looping Function
function arrayLowToHigh(low, high) {
  let array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}
