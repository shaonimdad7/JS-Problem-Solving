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

// -------------------- Task 3 -------------------------------
//------ a JavaScript program to find the most frequent element in an array and return it.


function mostFrequentElement(array) {
    let frequentElement = {};
    let maxFrequentElement = 0;
    let maxFrequent;

    for (let i = 0; i < array.length; i++) {
        const currentElement = array[i];
        frequentElement[currentElement] = (frequentElement[currentElement] || 0) + 1;
        if (frequentElement[currentElement] > maxFrequentElement) {
            maxFrequentElement = frequentElement[currentElement];
            maxFrequent = currentElement;
        }
    }
    return maxFrequent
}

const numbersOfArray = [1, 2, 3, 4, 5, 6, 4, 7, 4, 8, 9]
const maxNumber = mostFrequentElement(numbersOfArray);
console.log(maxNumber)


// -------------------- Task 4 -------------------------------
// ----------a simple JavaScript calculator. The calculator takes two numbers and an operator (+, -, *, /) as input and returns the result of the operation.


const calculator = (firstNumber, secondNumber, operator) => {
    switch (operator) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '/':
            return firstNumber / secondNumber;
        default:
            return 'Invalid Operator';
    }
}
const firstNumber = 15;
const secondNumber = 5;
const operator = '+'
const finalResult = calculator(firstNumber, secondNumber, operator);
console.log('result is:', finalResult)

// -------------------- Task 5 -------------------------------
// a program that generates a random password of a specified length. The password includes a mix of uppercase letters, lowercase letters, numbers, and special characters.


function generateRandomPassword(password) {
    const uppperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '01234567989';
    const specialCharacters = '!@#$%^&*_-+=?';

    const newPassword = uppperCaseLetters + lowerCaseLetters + numbers + specialCharacters;

    let randomPass = '';

    for (let i = 0; i < password; i++) {
        const random = Math.floor(Math.random() * newPassword.length);
        randomPass = randomPass + newPassword[random];
    }
    return randomPass;
};

const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);



// -------------------- Task 6 -------------------------------
// ---- a JavaScript function to find the second smallest element in an array of numbers. 


function theSecondSmallest(number) {
    if (number.length < 2) {
        return 'Array must have two elements at least in numbers'
    }
    number.sort((a, b) => a - b);
    return number[1];
}
const array = [10, 24, 8, 62, 15, 17, 11];
const secondSmallestNumber = theSecondSmallest(array);
console.log(secondSmallestNumber)

// -------------------- Task 7 -------------------------------
// ----  a function that takes a sorted array of numbers and a target value as input

const sumOfTwoNumber = (arrry, target) => {
    for (let i = 0; i < arrry.length - 1; i++) {
        for (let j = i + 1; j < arrry.length; j++) {
            const total = arrry[i] + arrry[j];

            if (total == target) {
                return [i, j];
            }
        }
    }
    return [];
};

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20, 16, 17];
const targetValue = 12;
const final = sumOfTwoNumber(inputArray, targetValue);
console.log(final);


