"use strict";
//check if a no. is divisible by 3, 5,noth or neither;
function checkDivisiblity(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("the number is divisible by both 3 and 5");
    }
    else if (num % 5 === 0) {
        console.log("the number is divible by 5");
    }
    else if (num % 3 === 0) {
        console.log("the number is divisible by 3");
    }
    else {
        console.log("the number isnt divisible either by 3 or by 5");
    }
}
//check
const num1 = 15;
checkDivisiblity(num1);
const num2 = 25;
checkDivisiblity(num2);
const num3 = 37;
checkDivisiblity(num3);
const num4 = 12;
checkDivisiblity(num4);
