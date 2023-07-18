const person = {
    name: 'Баясгалан',
    sayHello: function () {
        console.log(`Сайн уу, намайг ${this.name} гэдэг`);
    }
};
person.sayHello(); // Output: Сайн уу, намайг Баясгалан гэдэг

// const globalVariable = 'I am a global variable';

// const myFunction = () => {
//     if (true) {
//         let x = 10;
//         console.log("x=", x)
//     }
//     console.log('x=?', x);
// }
// myFunction()

// console.log(globalVariable); // Output: I am a global variable
// console.log(localVariable); // Error: localVariable is not defined





// const getBill = (orders = [], tipPercentage = 5, badService = false) => {
//     try {
//         if (!orders) {
//             throw new Error('Захиалгийн утга алдаатай байна.');
//         }
//         if (orders.length === 0) {
//             console.log('Захиалга байхгүй байна.');
//             return;
//         }
//         let bill = 0;
//         for (let i = 0; i < orders.length; i++) {
//             bill += orders[i];
//         }
//         let tip = bill * tipPercentage / 100;
//         if (badService) tip = 0;
//         return { bill, tip };
//     } catch (error) {
//         console.log("Алдаа гарлаа:", error)
//     }
// }
// const result = getBill(null)
// console.log("result", result)

// const sum = (...args) => {
//     console.log("args=", args)
//     let sum = 0;
//     for (const value of args) {
//         console.log("value", value)
//         sum += value
//     }
//     return sum
// }
// const result = sum(5, 10, 15, 20)
// console.log(result)
