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

