
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

AmmountRange.addEventListener('input', syncAmmountCH)
AmmountNumber.addEventListener('input', syncAmmountCH)

//linked the slider/input boxes
function syncAmmountCH(e) {
    const value = e.target.value
    AmmountRange.value = value
    AmmountNumber.value = value
}
