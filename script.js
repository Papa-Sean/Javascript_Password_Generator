const AmountRange = document.getElementById
('AmountRange')
const AmountNumber = document.getElementById
('AmountNumber')
const UPPERCASE = document.getElementById
('UPPERCASE')
const Nmbr = document.getElementById
('Nmbr')
const Special = document.getElementById
('Special')
const form = document.getElementById
('passwordGeneratorForm')

const LOWERCASEChar = lowHigh(65,90)
const UPPERCASEChar = lowHigh(97,122)
const NmbrChar = lowHigh(48,57)
const SpecialChar = lowHigh(33, 47).concat(lowHigh(58, 64)).concat(lowHigh(91, 96)).concat(lowHigh(123, 126))

AmountRange.addEventListener('input', syncAmountCH)
AmountNumber.addEventListener('input', syncAmountCH)
//added event listener to my forms
form.addEventListener('submit', e => {
  e.preventDefault()
  const AmountNumber = AmountNumberElement.value
  const UPPERCASE = UPPERCASEEElement.checked
  const Nmbr = NmbrElement.checked
  const Special = SpecialElement.checked
  const password = generatePassword(AmountNumber, UPPERCASE, Nmbr, Special)
})
//add function to generate password
//whenever I add this section, the javascript links I have in place stop working
function generatePassword(characterAmount, includeSymbols, includeUppercase, includeNumbers){
  let charCodes = LOWERCASEChar
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASEChar)
  if (includeNumbers) charCodes = charCodes.concat(NmbrChar)
  if (includeSymbols) charCodes = charCodes.concat(SpecialChar)
  const passwordCharecters []
  for (let i = 0; i < characterAmount, i++) {
    const characterCode = charCodes[Math.floor(Math.random() * characterAmount)]
    passwordCharecters.push(String.fromCharCode(charecterCode))
    passwordCharecters.push(charecter)
  }
}
return passwordCharecters.join('')

function lowHigh(low,high){
  const array = []
  for (let i = low; i <=high; i++){
    array.push(i)
  }
  return array
}
//linked the slider/input boxes
function syncAmountCH(e) {
    const value = e.target.value
    AmountNumber.value = value
    AmountRange.value = value
}
