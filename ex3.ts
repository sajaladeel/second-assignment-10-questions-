//convert given no. of days into weeks and days :
function convertDaysToWeeksAndDays(days:number):string{
    const weeks = (days/7);
    const remainingdays=days %7
    return `${days}days = ${weeks}weeks and ${remainingdays}days`;
}
const numberofdays=17
const result= convertDaysToWeeksAndDays(numberofdays)
console.log(result);