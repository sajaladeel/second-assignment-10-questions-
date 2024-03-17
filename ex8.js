"use strict";
// check leap year 
function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) ||
        year % 400 == -0) {
        return "it is leap year";
    }
    else {
        return "it is not a leap year";
    }
}
//check
const year1 = 2024;
const result1 = checkLeapYear(year1);
console.log(result1);
const year2 = 2020;
const result2 = checkLeapYear(year2);
console.log(result2);
const year3 = 2027;
const result3 = checkLeapYear(year3);
console.log(result3);
const year4 = 1999;
const result4 = checkLeapYear(year4);
console.log(result4);
