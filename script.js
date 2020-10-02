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
('pwgen')
const LOWERCASEChar = lowHigh(97,122)
const UPPERCASEChar = lowHigh(65,90)
const NmbrChar = lowHigh(48,57)
const SpecialChar = lowHigh(33, 47).concat(lowHigh(58, 64)).concat(lowHigh(91, 96)).concat(lowHigh(123, 126))

AmountRange.addEventListener('input', syncAmountCH)
AmountNumber.addEventListener('input', syncAmountCH)
//added event listener to my forms
form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = AmountNumber.value
  const includeUppercase = UPPERCASEE.checked
  const includeNumbers = Nmbr.checked
  const includeSymbols = Special.checked
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
})
//add function to generate password
function generatePassword(characterAmount, includeSymbols, includeUppercase, includeNumbers){
}

function lowHigh(low,high){
  const array = []
  for (let i= low; i <=high; i++){
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
