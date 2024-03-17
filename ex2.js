"use strict";
//program to calculate percentage 
//consider that we are canculating percentage of marks of two students
//declare a function to calculate percentage
function calculatePercent(marks, total) {
    return (marks / total) * 100;
}
// declaring variables:
const markz = 90;
const totalmarks = 100;
const percentage = calculatePercent(markz, totalmarks);
// printing variables on terminal in console.log:
console.log(`the percentage secured by class monitor is ${percentage}%`);
const markx = 76;
const totalmarkx = 100;
const percentagex = calculatePercent(markx, totalmarkx);
console.log(`the percentage secured by sajal adeel is ${percentagex}%`);
