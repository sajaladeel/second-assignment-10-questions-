// determine the category of user provded age :
function determineAge(age:
    number):string{
        if(age>=0 && age <= 12){
            return "child";
        }else if (age >=13 && age<=19){
            return "teenager";
        } else{
            return"adult";
        }
}
//for a 25 yearold person
const Age = 25;
const category =determineAge(Age);
console.log(`based on the provided age of user having age ${Age}, the category is ${category}.`);

//for person of 17 years of age 
const Age2 = 17;
const category2 =determineAge(Age2);
console.log(`based on the provided age of user having age ${Age2}, the category is ${category2}.`);

//for person of 7 years of age 
const Age3 = 7;
const category3 =determineAge(Age3);
console.log(`based on the provided age of user having age ${Age3}, the category is ${category3}.`);