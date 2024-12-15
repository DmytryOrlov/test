 export function celsiusToFahrenheit(celsius){
    const fahrenheit =(celsius*9/5)+ 32;
    return fahrenheit;
}
let celsiusTemperature=25 ;
let fahrenheitTemperature=celsiusToFahrenheit(celsiusTemperature);
console.log(fahrenheitTemperature);