//My code

const form = document.querySelector("#calc-form");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    calcUpdate();
  });

function calcUpdate() {
    let amount = document.querySelector("#loan-amount").value;
    let term = document.querySelector("#loan-years").value;
    let rate = document.querySelector("#loan-rate").value;
    monthlyPayment = calcPayment(amount, term, rate);
    total = totalCost(monthlyPayment, term);
    update(monthlyPayment, total);

};

function totalCost(monthlyPayment, term) {
    numberOfMonths = term * 12;
    total = monthlyPayment * numberOfMonths;
    return total.toFixed(2);
}

function calcPayment (amount, term, rate) {
    monthlyInterest = (rate / 100) / 12;
    numberOfPayments = term * 12;
    monthlyPayment = ((amount * monthlyInterest) / (1 - (1 + monthlyInterest) ** -numberOfPayments))
    .toFixed(2);

    return monthlyPayment;
};

function update (monthlyPayment, totalPayment) {
    let monthly = document.querySelector('#monthly-payment');
    monthly.textContent = "$" + monthlyPayment.toString();
    let total = document.querySelector("#total");
    total.textContent = "$" + totalPayment.toString();
}


