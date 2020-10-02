
const AmmountRange = document.getElementById
('AmmountRange')
const AmmountNumber = document.getElementById
('AmmountNumber')
const UPPERCASE = document.getElementById
('UPPERCASE')
const Nmbr = document.getElementById
('Nmbr')
const Special = document.getElementById
('Special')
const form = document.getElementById('pwgen')

AmmountRange.addEventListener('input', syncAmmountCH)
AmmountNumber.addEventListener('input', syncAmmountCH)
//added event listener to my forms
form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = AmmountNumber.value
  const includeUppercase = UPPERCASEE.checked
  const includeNumbers = Nmbr.checked
  const includeSymbols = Special.checked
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
})

//linked the slider/input boxes
function syncAmmountCH(e) {
    const value = e.target.value
    AmmountRange.value = value
    AmmountNumber.value = value
}
