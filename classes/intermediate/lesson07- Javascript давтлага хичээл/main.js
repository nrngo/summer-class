// 1. Өгөгдсөн object төрөлтэй car хувьсагчийн 
// бүх Properties болон утгуудыг буцаадаг функц бичнэ үү. Жишээ:
let car = {
    brand: 'Toyota',
    name: 'Prius',
    price: 20000000,
    color: 'red',
    size: '123',
}
const displayKeyValue = (input) => {
    for (const key in input) {
        console.log(key + "=" + input[key])
    }
}
displayKeyValue({ test: "test" })

// 2. Өгөгдсөн тоо хүртэлх 3 болон 5 -д хуваагддаг 
// тооны нийлбэр олдог функц бичнэ үү. 
// Жишээ: 10 хүртэлх тооны нийлбэр
const n = 5;
let niilber = 0;
for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) niilber += i
}
console.log('niilber=' + niilber)

// 3. МУИС-н голч дүн боддог функц бичнэ үү. 
// Гараас дүнгийн жагсаалт array (массив) 
// хэлбэрээр өгөгдөх ба дундаж дүнг бодож ямар дүн авсан харуулна.
const dun = [90, 85, 100, 90, 60]
// 1. Дундаж дүн
let niitOnoo = 0
for (let i = 0; i < dun.length; i++) {
    const onoo = dun[i];
    niitOnoo += onoo
}
const dundaj = niitOnoo / dun.length;
let golchDvn = ''
const POINTS = [
    { point: 95, sign: 'A', gpa: '4.0' },
    { point: 90, sign: 'A-', gpa: '3.6' },
    { point: 85, sign: 'B', gpa: '3.1' },
    { point: 80, sign: 'B-', gpa: '2.7' },
    { point: 75, sign: 'C', gpa: '2.3' },
    { point: 70, sign: 'C-', gpa: '1.9' },
    { point: 65, sign: 'D', gpa: '1.4' },
    { point: 60, sign: 'D-', gpa: '1.0' },
    { point: 0, sign: 'F', gpa: '0' },
]
for (let i = 0; i < POINTS.length; i++) {
    const object = POINTS[i];
    if (dundaj > object.point) {
        golchDvn = object.gpa
        break;
    }
}
console.log("golchDvn=", golchDvn, dundaj)

// 2. Дундаж дүн харгалзах голч дүн олно
// if (dundaj >= 95) {
//     golchDvn = '4.0'
// }
// else if (dundaj >= 90) {
//     golchDvn = '3.6'
// }
// console.log("DUNDAJ", dundaj)
// switch (true) {
//     case dundaj >= 95:
//         console.log("4.0")
//         break;
//     case dundaj >= 90:
//         console.log("3.6")
//         break;
//     case dundaj >= 85:
//         console.log("3.1")
//         break;
//     default:
//         break;
// }
// 3.

// 3. Голч дүнгээ хэвлэнэ
// console.log("golchDvn=", golchDvn)

// function calculateGPA(points) {
//     const gradeScale = [95, 90, 85];
//     const gradePoints = [4.0, 3.6, 3.1];

//     let totalPoints = 0;
//     let totalCredits = points.length;

//     for (let i = 0; i < points.length; i++) {
//         let point = points[i];

//         for (let j = 0; j < gradeScale.length; j++) {
//             if (point >= gradeScale[j]) {
//                 totalPoints += gradePoints[j];
//                 break;
//             }
//         }
//     }

//     let gpa = totalPoints / totalCredits;
//     return gpa.toFixed(2); // Rounded to two decimal places
// }

// const points = [90, 95, 100];
// const gpa = calculateGPA(points);
// console.log("GPA:", gpa);