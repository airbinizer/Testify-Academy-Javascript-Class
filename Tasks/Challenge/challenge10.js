//Create a function that filters out negative numbers
function removeNegativeNumbers(arr) {
    return arr.filter(number => number >= 0);
}

console.log(removeNegativeNumbers([-5, 10, -3, 8, 0, -2]));