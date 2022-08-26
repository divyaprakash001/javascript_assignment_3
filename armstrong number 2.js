"use strict"

let number  = 153;
let sum = 0;

let dig = number;
while (dig > 0) {
    let remainder = dig % 10;
    sum += remainder * remainder * remainder;
    dig = parseInt(dig / 10);
}


if(sum == number)
{
    console.log(`Given number ${number} is an armstrong number.`);
}
else{
    console.log(`Given number ${number} is not an armstrong number.`);
}