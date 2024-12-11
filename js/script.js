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

const ticketElm = document.querySelector('ticket-train')
const hiddenTicketElm = document.querySelector('d-none')

formElm.addEventListener('submit', function(event) {
    event.preventDefault();

    const ticketPrice = kmFormElm * 0.21;
    let reductTicketprice
    
    if (ageFormElm === 'maggiorenne') {
        reductTicketprice = ticketPrice - (ticketPrice * 20) / 100
        console.log(reductTicketprice)
    } else (ageFormElm === 'senior')
        reductTicketprice = ticketPrice - (ticketPrice * 40) / 100
        console.log(reductTicketprice)
    

    ticketNameElm.innerHTML = fullNameFormElm.value
    ticketTypeElm.innerHTML = ageFormElm.value



    // ticketElm.classList.remove(".d-none");
})
