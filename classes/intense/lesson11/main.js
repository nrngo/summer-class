// Алхам 1
let billAmount = prompt("Та тооцооны дүнг оруулна уу?: ₮");
let tipPercentage = prompt(
    "Та өгөхийг хүсэж буй гарын мөнгөний (tip) хувь оруулна уу?: ₮"
);

// Алхам 2
billAmount = parseFloat(billAmount);
tipPercentage = parseFloat(tipPercentage);

// Алхам 3
let tipAmount = billAmount * (tipPercentage / 100);

// Алхам 4
let totalBill = billAmount + tipAmount;
let result =
    "Таны нийт тооцоо (гарын мөнгө орсон): ₮" + totalBill.toFixed(2);
// Алхам 5
console.log(result);
alert(result);

