// group of students based on marks 

let marks = [40, 85, 90, 33, 72];

let pass = marks.filter(a => a >= 40);
let Fail = marks.filter(a => a < 40);

console.log("passMarks:",pass);
console.log("FailMarks:",Fail);

// count how many numbers in an arrey are greater than 50
  // method - 1
const numbers = [40, 85, 90, 33, 72];
const count = numbers.filter(num => num > 50).length;
console.log(count);

  // method - 2

  const numberss = [40, 85, 90, 33, 72];
let counts = 0;

for (let i = 0; i < numberss.length; i++) {
    if (numberss[i] > 50) {
        counts++;
    }
}

console.log(count);


// find all prime numbers in an arrey

const findPrimes = arr => arr.filter(num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
});

console.log(findPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));




// swap first and last element of an array

function swapFirstLast(arr) {
    
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    return arr;
}

console.log(swapFirstLast([1, 2, 3, 4, 5]));


// find the second highest number in an array

const findSecondHighest = (arr) => [...new Set(arr)].sort((a, b) => b - a)[1] || "No second highest";

const numbersss = [10, 5, 8, 19, 20, 15];
console.log(findSecondHighest(numbersss));


// move all zeros to the end of the array

let array = [1, 0, 5, 0, 9, 7];
function moveZerosToEnd(arr) {
    const nonZeros = arr.filter(num => num !== 0);
    const zeros = arr.filter(num => num === 0);
    return [...nonZeros, ...zeros];
}

console.log(moveZerosToEnd(array));