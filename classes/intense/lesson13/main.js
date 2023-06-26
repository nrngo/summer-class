const average = (number1, number2) => {
    const result = (number1 + number2) / 2
    return result
}
const result = average(5, 15);


const PI = 3.14
PI = 2.14

const person = {
    name: 'Baysaa',
    age: 30,
    avgPoint: 85
}
person.avgPoint = 90














// 1
const showStars = (input) => {
    let stars = ''
    for (let i = 0; i < input; i++) {
        stars += '*'
        console.log('i=', i, stars)
        // stars: *
        // stars: **
        // stars: *** 
    }
}
showStars(100)

// Дасгал 1:
// Нөхцөл үнэн байх (Truthy) утгийг тоолдог функц бич. 
// Хүснэгтээр утгууд өгөгдөнө.
// Falsy утгууд:
const input = [1, 2, 'test', 'hello', 7, 8]
let counter = 0
for (let i = 0; i < input.length; i++) {
    if (input[i] > 5) {
        counter++;
    }
}
// const array = [1, 100, 'Hello', '', false, true, undefined, null, 0, NaN]





