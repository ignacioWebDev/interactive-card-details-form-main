//Card variables
var h4FrontCardNumber = document.getElementById("h4-front-card-number")
var h4FrontCardName = document.getElementById("h4-front-card-name")
var h4FrontCardDate = document.getElementById("h4-front-card-date")
var h4BackCard = document.getElementById("h4-back-card")

// Input
const cardholderName = document.getElementById("cardholder-name")
const cardNumber = document.getElementById("card-number")
const expMonth = document.getElementById("exp-month")
const expYear = document.getElementById("exp-year")
const cvc = document.getElementById("cvc")

// P error
const pErrorCardholder = document.getElementById("p-error-cardholder")
const pErrorNumber = document.getElementById("p-error-number")
const pErrorDate = document.getElementById("p-error-date")
const pErrorCvc = document.getElementById("p-error-cvc")

// Submit btn
const submitBtn = document.getElementById("submit-btn")

// Function to check if the inputs are correct
function checkInputs() {  
    let nameValue = cardholderName.value.trim();

    let words = nameValue.split(/\s+/);
    if(nameValue.length < 3 || words.length < 2) {
        pErrorCardholder.style.display = "block";
        pErrorCardholder.textContent = "Please enter your full name";
    } else {
        pErrorCardholder.style.display = "none";
        h4FrontCardName.textContent = cardholderName.value;
        cardholderName.placeholder = cardholderName.value
        cardholderName.value = "";
    }

    if(cardNumber.value.contains = "/^[A-Za-z]+$/") {
        pErrorNumber.style.display = "block";
        pErrorNumber.textContent = "Wrong format, numbers only";
    } else if(cardNumber.value.length < 12) {
        pErrorNumber.style.display = "block";
        pErrorNumber.textContent = "Please enter the 12 digits" ;
    } else {
        pErrorNumber.style.display = "none";
        console.log("Card number" + cardNumber.value);
        cardNumber.value = "";
    }

    if(expMonth.value.length == 0 || expYear.value.length == 0) {
        pErrorDate.style.display = "block";
        pErrorDate.textContent = "Can't be blank"
    } else if (expMonth.value.length == 1 || expYear.value.length == 1) {
        pErrorDate.style.display = "block";
        pErrorDate.textContent = "Please fill the missing number"
    }

}


