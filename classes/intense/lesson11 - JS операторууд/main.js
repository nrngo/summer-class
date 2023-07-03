const hurdShalgah = (speed) => {
    const maxSpeed = 80
    const pointPerKm = 5
    // 40km
    const zuruu = speed - maxSpeed
    // 40 / 5 = 8 * 1 = 8 
    const aldsanOnoo = zuruu / pointPerKm
    console.log("Aldsan onoo=" + aldsanOnoo, speed)
    if (aldsanOnoo > 5)
        console.log("ERH hasagdsaan hurd=" + speed)
}
hurdShalgah(120)
hurdShalgah(90)
hurdShalgah(200)



// const n = 20
// for (let i = 1; i <= n; i += 2) {
//     console.log("Tegsh", i)
// }


// Тонгорогсон тоо:
// Өгөгдсөн тооны тонгорогсон тоог ол.
// Input: 1234 Output: 4321
// Input: 345678 Output: 876543
// 1. Алгоритм
// let input = 12345678;
// const length = input.toString().length
// let reverseNumber = 0;
// // // 1. Хамгийн сүүлийн цифр олох: 4
// // let lastDigit = input % 10
// // // 2. Сүүлийн цифрийг хасаад үлдсэн тоог олох: 123
// // input = (input - lastDigit) / 10
// // // 3. Орон ахиулах: 4
// // reverseNumber = reverseNumber * 10 + lastDigit
// for (let i = 0; i < length; i++) {
//     // 1. Хамгийн сүүлийн цифр олох: 123 % 10 = 3
//     lastDigit = input % 10
//     // 2. Сүүлийн цифрийг хасаад үлдсэн тоог олох: (123 -3) / 10 = 12
//     input = (input - lastDigit) / 10
//     // 3. Орон ахиулах: 4 * 10 + 3 = 43
//     reverseNumber = reverseNumber * 10 + lastDigit
//     console.log("i", i, 'lastDigit', lastDigit, 'input', input)
// }
// console.log("input=", input)
// console.log("reverseNumber=", reverseNumber)
// 2. JS function:
// number.toString().split("").reverse().join("")
// 3. Элементүүдийн байрлалаар нь
// const input = "12345";
// let reverse = '';
// for (let i = input.length - 1; i >= 0; i--) {
//     const char = input[i]
//     console.log(char)
//     reverse += char
//     // reverse = reverse + char
// }

// console.log("input", input)
// console.log("reverse", reverse)

// // Алхам 1
// let billAmount = prompt("Та тооцооны дүнг оруулна уу?: ₮");
// let tipPercentage = prompt(
//     "Та өгөхийг хүсэж буй гарын мөнгөний (tip) хувь оруулна уу?: ₮"
// );
// // Алхам 2
// billAmount = parseFloat(billAmount);
// tipPercentage = parseFloat(tipPercentage);
// // Алхам 3
// let tipAmount = billAmount * (tipPercentage / 100);
// // Алхам 4
// let totalBill = billAmount + tipAmount;
// let result =
//     "Таны нийт тооцоо (гарын мөнгө орсон): ₮" + totalBill.toFixed(2);
// // Алхам 5
// console.log(result);
// alert(result);

