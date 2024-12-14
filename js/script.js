// FUNCTION 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//FORM
const formElm = document.getElementById('form');

const fullNameFormElm = document.getElementById('fullname')
const kmFormElm = document.getElementById('km')
const ageFormElm = document.getElementById('age')

const ticketNameElm = document.getElementById('ticket-name');
const ticketTypeElm = document.getElementById('ticket-type');
const carriageElm = document.getElementById('carriage');
const cpCodeElm = document.getElementById('cp-code');
const ticketPriceElm = document.getElementById('ticket-price');

const ticketElm = document.getElementById('ticket-train')
const resetBtn = document.getElementById('reset-ticket')

const PriceForKm = 0.21;

formElm.addEventListener('submit', function(event) {
    event.preventDefault();
    ticketElm.classList.remove("d-none");

    const age = ageFormElm.value;
    const km = Number(kmFormElm.value)
    console.log(km, age)

    let ticketPrice = km * PriceForKm;
    let ticketOffert = 'Biglietto standard'

    if (age === 'minorenne') {
        ticketPrice = ticketPrice - (ticketPrice * 20) / 100
        ticketOffert = 'Biglietto scontato'
        console.log(ticketPrice.toFixed(2))
    } else if (age === 'senior') {
        ticketPrice = ticketPrice - (ticketPrice * 40) / 100
        ticketOffert = 'Biglietto scontato'
        console.log(ticketPrice.toFixed(2)) 
    } else {
        ticketOffert = 'Biglietto Standard'
        console.log(ticketPrice.toFixed(2))
    }
    
    ticketNameElm.innerHTML = fullNameFormElm.value;
    ticketTypeElm.innerHTML = ticketOffert;
    carriageElm.innerHTML = getRndInteger(1, 10);
    cpCodeElm.innerHTML = getRndInteger(90000, 99999);
    ticketPriceElm.innerHTML = `€${ticketPrice.toFixed(2)}`;
})

resetBtn.addEventListener('click', function(event) {
    event.preventDefault();
    ticketElm.classList.add("d-none");
})
