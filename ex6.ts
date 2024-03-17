//check temperature and suggest user to wear clothes accordingly:
function suggestClothes(temperature:number):string{
    if(temperature <10){
        return "it is cold outside, you should wear warm clothes.";
    }else if (temperature>=10 && temperature<20){
        return "it is cool outside, you should wear light clothes";
    }else if (temperature>=20 && temperature<30){
        return "the weather is mild, you can go for a light Tee shirt ";
    }else{
        return "it is warm, outside so you can wear the lightest stuff shirt and be comfortable";
    }
}
// now apply this function
const outsideTemperature = 7;
const clothesSuggested = suggestClothes(outsideTemperature);
console.log(`as the temperature outside is ${ outsideTemperature} degree celsius and ${clothesSuggested}.`)

const outsideTemperature2 = 15;
const clothesSuggested2 = suggestClothes(outsideTemperature2);
console.log(`as the temperature outside is ${ outsideTemperature2} degree celsius and ${clothesSuggested2}.`)

const outsideTemperature3 = 27;
const clothesSuggested3 = suggestClothes(outsideTemperature3);
console.log(`as the temperature outside is ${ outsideTemperature3} degree celsius and ${clothesSuggested3}.`)

const outsideTemperature4 = 45;
const clothesSuggested4 = suggestClothes(outsideTemperature4);
console.log(`as the temperature outside is ${ outsideTemperature4} degree celsius and ${clothesSuggested4}.`)