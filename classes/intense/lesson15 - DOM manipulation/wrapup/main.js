let points = [90, 85, 60, 50, 100]
const avgPoints = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sum = sum + element;
        console.log("Array element=", element)
    }
    const average = sum / array.length
    console.log("SUM", sum)
    console.log("average", average)
}
avgPoints(points)

// let sum = 0;
// const sumN = (n) => {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum = sum + i;
//     }
//     return sum;
// }
// console.log(sumN(234234));