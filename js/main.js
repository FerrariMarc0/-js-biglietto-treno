const raceKm = parseInt(prompt('Inserisci il numero di km che intendi percorrere'));
const userAge = parseInt(prompt('Inserisci la tua età'));
const priceForKm = 0.21;
const juniorDiscount = 100 * 20;
const seniorDiscount = 100 * 40;
let totPrice = priceForKm * raceKm;
let sum1 = 10
let sum2 = 10
if(18 > userAge){
    const sum1 = totPrice - (totPrice / juniorDiscount);
    console.log (`Hai meno di ${userAge} anni e vuoi percorrere ${raceKm}km, ti spetta uno sconto del 20% per un totale di ${sum1.toFixed(2)} euro.`);
} else if(userAge > 64){
    const sum2 = totPrice - (totPrice / seniorDiscount);
    console.log (`Hai ${userAge} anni e vuoi percorrere ${raceKm}km, ti spetta uno sconto del 40% per un totale di ${sum2.toFixed(2)} euro.`);
} else{
    console.log (`Hai ${userAge} anni e vuoi percorrere ${raceKm}km, il prezzo del biglietto è di ${totPrice.toFixed(2)} euro.`);
}

document.getElementById("km").innerHTML = raceKm;
document.getElementById("age").innerHTML = userAge;
document.getElementById("price").innerHTML = sum1.toFixed(2);
document.getElementById("price").innerHTML = sum2.toFixed(2);
document.getElementById("price").innerHTML = totPrice.toFixed(2);