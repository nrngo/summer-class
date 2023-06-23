// # Ажлын зар developer (front, back) хөгжүүлэгч авна
const skills = {
    frontend: false,
    backend: false,
};
const isDeveloper = skills.backend || skills.frontend
console.log("isDeveloper", isDeveloper)


// && : and буюу бүгд биелэж байх үед "үнэн"
// || : or буюу аль нэг нь л биелэх үед "үнэн"



let age = 18;
const isAdult =
    age >= 18
        ? 'Насанд хүрсэн'
        : 'Насанд хүрээгүй';
console.log("isAdult", isAdult)


let x = 3;
let y = 2;
console.log(x, y)

// true (утга + төрөл )
console.log('x === 3', x !== 3)
// true (утга),
console.log('x == 3', x != 3)

// x == 3
// x++, ++x => x = x + 1
// x--, --x => x = x - 1
// console.log("x++", x++)
// console.log("x=", x)
// console.log('x + y=', x + y);
// console.log('x - y=', x - y);
// console.log('x * y=', x * y);
// console.log('x / y=', x / y);
// console.log('x % y=', x % y);
// console.log('x ** y=', x ** y);
