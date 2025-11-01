//Card variables
var h2FrontCardNumber = document.getElementById("h2-front-card-number")
var h4FrontCardName = document.getElementById("h4-front-card-name")
var h4FrontCardMonth = document.getElementById("h4-front-card-month")
var h4FrontCardYear = document.getElementById("h4-front-card-year")
var h3BackCard = document.getElementById("h3-back-card")

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
    const month = parseInt(expMonth.value);
    const year = parseInt(expYear.value);
    let cleanNumber = cardNumber.value.replace(/\s+/g, "");

    if(nameValue.length < 3 || words.length < 2) {
        pErrorCardholder.style.display = "block";
        pErrorCardholder.textContent = "Please enter your full name";
    } else {
        pErrorCardholder.style.display = "none";
        h4FrontCardName.textContent = cardholderName.value;
        cardholderName.placeholder = cardholderName.value
        cardholderName.value = "";
    }


    if (cleanNumber.trim() === "") {
        pErrorNumber.style.display = "block";
        pErrorNumber.textContent = "Can't be blank";
    } else if (!/^\d+$/.test(cleanNumber)) {
        pErrorNumber.style.display = "block";
        pErrorNumber.textContent = "Wrong format, numbers only";
    } else if (cleanNumber.length < 12) {
        pErrorNumber.style.display = "block";
        pErrorNumber.textContent = "Please enter at least 12 digits";
    } else {
        pErrorNumber.style.display = "none";
        h2FrontCardNumber.textContent = cardNumber.value;
        cardNumber.placeholder = cardNumber.value;
        cardNumber.value = "";
    }


    if (!month || month > 12 || !year || year < 0) {
        pErrorDate.style.display = "block";
        pErrorDate.textContent = "Invalid date";
    } else if (month == 1 || year == 1) {
        pErrorDate.style.display = "block";
        pErrorDate.textContent = "Please fill the missing number"
    } else {
        pErrorDate.style.display = "none";
        expMonth.placeholder = expMonth.value;
        expYear.placeholder = expYear.value;
        h4FrontCardMonth.textContent = expMonth.value;
        h4FrontCardYear.textContent = expYear.value;
        expMonth.value = "";
        expYear.value = ""
    }

    if(cvc.value.length == 0){
        pErrorCvc.style.display = "block";
        pErrorCvc.textContent = "Can't be blank"
    } else if (cvc.value.length == 1) {
        pErrorCvc.style.display = "block";
        pErrorCvc.textContent = "Please fill the missing numbers"        
    } else if (cvc.value.length == 2) {
        pErrorCvc.style.display = "block";
        pErrorCvc.textContent = "Please fill the missing number"        
    } else {
        pErrorCvc.style.display = "none";
        cvc.placeholder = cvc.value;
        h3BackCard.textContent = cvc.value;
        cvc.value = ""
    }
}


