// source: https://www.geeksforgeeks.org/currency-converter-in-javascript/

document.addEventListener(
  'DOMContentLoaded', function () {
    window.setTimeout(document.getElementById('svgIllustration').classList.add('animated'),1000);
  }
  )

const api = "https://api.exchangerate-api.com/v4/latest/USD";

var ogAmount = document.querySelector(".searchBox");
var ogAmountInput = document.getElementById("ogAmount").value;
var convert = document.querySelector(".convert");
var fromCurrecy = document.querySelector(".from");
var toCurrecy = document.querySelector(".to");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var resultFrom;
var resultTo;
var ogAmountValue;

function inputValidation() {
  var amountValidation = parseFloat(document.getElementById("ogAmount").value);
  if (/^[1-9]\d{0,3}(\.\d{2})*$/.test(amountValidation) == true) {
    return
  } else {
    document.getElementById("ogAmount").value = ''
    const errorMsg = document.getElementById('errorMsg');
    errorMsg.style.display = "block";
  }
}

fromCurrecy.addEventListener('change', (event) => {
  resultFrom = `${event.target.value}`;
});

toCurrecy.addEventListener('change', (event) => {
  resultTo = `${event.target.value}`;
});

ogAmount.addEventListener('input', updateValue);

function updateValue(e) {
  ogAmountValue = e.target.value;
}

convert.addEventListener("click", getResults);

function getResults() {
  fetch(`${api}`)
      .then(currency => {
        return currency.json();
      }).then(displayResults);
}

function displayResults(currency) {
  let fromRate = currency.rates[resultFrom];
  let toRate = currency.rates[resultTo];
  finalValue.innerHTML = 
    ((toRate / fromRate) * ogAmountValue).toFixed(2);
  finalAmount.style.display = "block";
}

function clearValue() {
  window.location.reload();
  document.getElementsByClassName("finalValue").innerHTML = "";
};