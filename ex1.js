"use strict";
//to convert temperature from celsius to fahrenheit
function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
const celsiusTemperature = 42;
const fahrenheitTemperature = convertCelsiusToFahrenheit(celsiusTemperature);
console.log(`the temperature in fahrenheit is ${fahrenheitTemperature}`);
