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

// Form
const form = document.getElementById("form")

// Completed Form Div
const completedForm = document.getElementById("completed-form")

// Continue btn from completed form
const continueBtn = document.getElementById("continue-btn")

// Function to check if the inputs are correct
function checkInputs() {  
    
    let name = false;
    let card = false;
    let date = false;
    let cvcc = false;

    let nameValue = cardholderName.value.trim();
    let words = nameValue.split(/\s+/);
    const month = parseInt(expMonth.value);
    const year = parseInt(expYear.value);
    let cleanNumber = cardNumber.value.replace(/\s+/g, "");

    // --------------------------
    // ---- Cardholder Name -----
    // --------------------------


    if(nameValue.length < 3 || words.length < 2) {
        pErrorCardholder.style.display = "block";
        pErrorCardholder.textContent = "Please enter your full name";
        cardholderName.classList.add("red-border");
    } else {
        pErrorCardholder.style.display = "none";
        h4FrontCardName.textContent = cardholderName.value;
        cardholderName.placeholder = cardholderName.value
        cardholderName.classList.remove("red-border");
        name = true
    }

    // --------------------------
    // ------ Card Number -------
    // --------------------------

    if (cleanNumber.trim() === "") {
        pErrorNumber.style.display = "block";
        pErrorNumber.textContent = "Can't be blank";
        cardNumber.classList.add("red-border");
    } else if (!/^\d+$/.test(cleanNumber)) {
        pErrorNumber.style.display = "block";
        pErrorNumber.textContent = "Wrong format, numbers only";
        cardNumber.classList.add("red-border");
        h2FrontCardNumber.textContent = cardNumber.value;
        cardNumber.placeholder = cardNumber.value;
    } else if (cleanNumber.length < 12) {
        pErrorNumber.style.display = "block";
        pErrorNumber.textContent = "Please enter at least 12 digits";
        cardNumber.classList.add("red-border");
        h2FrontCardNumber.textContent = cardNumber.value;
        cardNumber.placeholder = cardNumber.value;
    } else {
        pErrorNumber.style.display = "none";
        h2FrontCardNumber.textContent = cardNumber.value;
        cardNumber.placeholder = cardNumber.value;
        cardNumber.classList.remove("red-border");
        cardNumber.value = "";
        card = true
    }

    // ---------------------------
    // ---- EXP. Date (MM/YY) ----
    // ---------------------------


    if (!month && !year) {
        pErrorDate.style.display = "block";
        pErrorDate.textContent = "Can't be blank";
        expMonth.classList.add("red-border");
        expYear.classList.add("red-border");
    } else if (!month) {
        pErrorDate.style.display = "block";
        pErrorDate.textContent = "Can't be blank";
        expMonth.classList.add("red-border");
        expYear.classList.remove("red-border");
        expMonth.placeholder = expMonth.value;
        h4FrontCardMonth.textContent = expMonth.value;
    } else if (!year) {
        pErrorDate.style.display = "block";
        pErrorDate.textContent = "Can't be blank";
        expYear.classList.add("red-border");
        expMonth.classList.remove("red-border");
        expYear.placeholder = expYear.value;
        h4FrontCardYear.textContent = expYear.value;
    } else if (month > 12 || year <= 0) {
        pErrorDate.style.display = "block";
        pErrorDate.textContent = "Invalid date";
        expMonth.classList.add("red-border");
        expYear.classList.add("red-border");
        expMonth.placeholder = expMonth.value;
        expYear.placeholder = expYear.value;
        h4FrontCardMonth.textContent = expMonth.value;
        h4FrontCardYear.textContent = expYear.value;
    } else if (month === 1 || year === 1) {
        pErrorDate.style.display = "block";
        pErrorDate.textContent = "Please fill the missing number";
        expMonth.classList.add("red-border");
        expYear.classList.add("red-border");
        expMonth.placeholder = expMonth.value;
        expYear.placeholder = expYear.value;
        h4FrontCardMonth.textContent = expMonth.value;
        h4FrontCardYear.textContent = expYear.value;
    } else {
        pErrorDate.style.display = "none";
        expMonth.placeholder = expMonth.value;
        expYear.placeholder = expYear.value;
        h4FrontCardMonth.textContent = expMonth.value;
        h4FrontCardYear.textContent = expYear.value;
        expMonth.classList.remove("red-border");
        expYear.classList.remove("red-border");
        expMonth.value = "";
        expYear.value = "";
        date = true
    }

    // --------------------------
    // ---------- CVC -----------
    // --------------------------

    if(cvc.value.length === 0){
        pErrorCvc.style.display = "block";
        pErrorCvc.textContent = "Can't be blank";
        cvc.classList.add("red-border");
    } else if (cvc.value.length === 1) {
        pErrorCvc.style.display = "block";
        pErrorCvc.textContent = "Please fill the missing numbers";
        cvc.classList.add("red-border");
        cvc.placeholder = cvc.value;
        h3BackCard.textContent = cvc.value;
    } else if (cvc.value.length === 2) {
        pErrorCvc.style.display = "block";
        pErrorCvc.textContent = "Please fill the missing number";
        cvc.classList.add("red-border");
        cvc.placeholder = cvc.value;
        h3BackCard.textContent = cvc.value;        
    } else {
        pErrorCvc.style.display = "none";
        cvc.placeholder = cvc.value;
        h3BackCard.textContent = cvc.value;
        cvc.classList.remove("red-border");
        cvc.value = "";
        cvcc = true
    }

    // Check if the form was well completed and show the congrats div
    if (name === true && card === true && date === true && cvcc === true) {
        form.classList.add("hidden");
        submitBtn.classList.add("hidden");
        completedForm.classList.remove("hidden")
    }
}

function clearData () {
    cardholderName.placeholder = "e.g. Jane Appleseed";
    cardNumber.placeholder = "e.g. 1234 5678 9123 0000";
    expMonth.placeholder = "MM";
    expYear.placeholder = "YY";
    cvc.placeholder = "e.g. 123";
    h2FrontCardNumber.textContent = "0000 0000 0000 0000";
    h4FrontCardName.textContent = "JANE APPLESEED";
    h4FrontCardMonth.textContent = "00";
    h4FrontCardYear.textContent = "00";
    h3BackCard.textContent = "000";
}

continueBtn.onclick = function () {
    clearData();
    form.classList.remove("hidden");
    submitBtn.classList.remove("hidden");
    completedForm.classList.add("hidden")
}

