const raceKm = Number(prompt('Inserisci il numero di km che intendi percorrere'));
const userAge = parseInt(prompt('Inserisci la tua età'));
const priceForKm = 0.21
const juniorDiscount = 100 * 20
const seniorDiscount = 100 * 40
let totPrice = priceForKm * raceKm

if(18 > userAge){
    sum = (priceForKm / juniorDiscount);
    console.log(`Hai meno di ${userAge} anni e vuoi percorrere ${raceKm}km, ti spetta uno sconto del 20% per un totale di ${sum} euro`)
} else if(userAge > 64){
    sum = (priceForKm / seniorDiscount);
    console.log(`Hai ${userAge} anni e vuoi percorrere ${raceKm}km, ti spetta uno sconto del 40% per un totale di ${sum} euro`)
} else( userAge > 17 )
