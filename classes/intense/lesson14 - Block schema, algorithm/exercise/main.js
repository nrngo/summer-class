let sum = 0;
const n = 100
for (let i = 1; i <= n; i++) {
    sum = sum + i;
    // i=1
    // sum = 0 + 1 = 1
    // i=2
    // sum = 1 + 2 = 3
    //  ...
    console.log("i=" + i, 'sum=' + sum)
}
console.log("Sum=" + sum)



// function findMaxNumber(arr) {
//     if (arr.length === 0) {
//         return null; // Return null if the array is empty
//     }

//     let max = arr[0]; // Assume the first element is the maximum

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]; // Update max if a larger element is found
//         }
//     }

//     return max; // Return the maximum number
// }

// // Example usage
// const numbers = [3, 7, 2, 9, 4, 1];
// const maxNumber = findMaxNumber(numbers);
// console.log(maxNumber); // Output: 9





