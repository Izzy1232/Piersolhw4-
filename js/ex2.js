console.log("Piersol's Output from HW 4 Example 2");

const f = Number(prompt("Please input fahrenheit temperature"))

function fahrenheitToCelsius (fahrenheit) {
  let celsius =  (fahrenheit - 32) * 5/9
  return celsius
}
console.log(`${f} degrees farenheit is equivalent to ${fahrenheitToCelsius(f)} degrees Celsius`);

let deg212 = 212;
let converted212 = fahrenheitToCelsius(deg212);
console.log(`Water's boiling temperature is ${deg212} Fahrenheit or ${converted212} Celsius`);

console.log(`32 degrees Fahrenheit = ${fahrenheitToCelsius(32)} degrees
Celsius`);
let deg98pt7 = 98.7;
let converted98pt7 = fahrenheitToCelsius(deg98pt7);
let round = converted98pt7.toFixed(2)
let roundedCelsius = Math.round(converted98pt7);

console.log(`Temperature of ${deg98pt7} Fahrenheit is ${formattedCelsius} is equivalent to ${roundedCelsius} degrees Celsius`);
