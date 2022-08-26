"use strict"

let number = 145;
let sum = 0;

// function for finding factorial...
function factorial(number) {

    if (number < 0) {
        console.log('Error! Factorial for negative number does not exist.');
        return fact;

    }

    // if number is 0
    else if (number === 0) {
        console.log(`The factorial of ${number} is 1.`);
        return fact;

    }

    // if number is positive
    else {
        let fact = 1;
        for (let i = 1; i <= number; i++) {
            fact *= i;
        }
        console.log(`The factorial of ${number} is ${fact}.`);
        return fact;
    }
}

// eterate digits and calculate sum
let dig = number;
while (dig > 0) {
    let remainder = dig % 10;
    sum += factorial(remainder);
    dig = parseInt(dig / 10);
}

// check the condition
if(sum == number)
{
    console.log("Special number");
}
else{
    console.log("Not special number");
}

