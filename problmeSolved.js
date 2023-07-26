// Here are some of my problem-solving of JS 

// -------------------- Task 1 -------------------------------
// -----(a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method )

let myName = 'Emdadul Haque Shaon'

function reverseMyName(myName) {
    let result = ''
    for (let i = myName.length - 1; i >= 0; i--) {
        result = result + myName[i]
    }
    return result;
}
console.log(reverseMyName(myName))

// -------------------- Task 2 -------------------------------
//--------- a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 



function sumOfPositiveNumbers(number) {
    let result = 0;
    for (let i = 0; i < number.length; i++) {
        if (number[i] > 0) {
            result = result + number[i]
        }
    }
    return result
}

const arrayOfNumber = [1, -2, -3, 4, 5, 6, -7, 8, -9]
const outPut = sumOfPositiveNumbers(arrayOfNumber)
console.log(outPut)