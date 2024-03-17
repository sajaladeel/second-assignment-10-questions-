//determine days of week
let dayNam 
function determineDayOfWeek(dayNum:
    number):string{
        if (dayNum ===1 ){
            return"sunday";
        }else if (dayNum ===2){
            return "monday"
        }else if (dayNum ===3){
            return "tuesday"
    }else if (dayNum ===4){
        return "wednesday"
    }else if (dayNum ===5){
        return "thursday"
    }else if (dayNum ===6){
        return "friday"
    }else if (dayNum ===7){
        return "saturday"

        }else {dayNam =  "invalid day number";
    }
    return dayNam;
}

const userInput =4 ;
const dayOfWeek = determineDayOfWeek(userInput);
console.log(dayOfWeek);

const userInput2 = 10;
const dayOfWeek2 = determineDayOfWeek(userInput2);
console.log(dayOfWeek2);

const userInput3 =5 ;
const dayOfWeek3 = determineDayOfWeek(userInput3);
console.log(dayOfWeek3);

const userInput4 =1 ;
const dayOfWeek4 = determineDayOfWeek(userInput4);
console.log(dayOfWeek4);