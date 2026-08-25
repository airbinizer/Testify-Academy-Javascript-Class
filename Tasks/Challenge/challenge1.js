//1. Calculate the sum of numbers within an array
const numbers = [10, 20, 30, 40, 50];

function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log(sumArray(numbers));
