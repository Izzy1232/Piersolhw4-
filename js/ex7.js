console.log("Piersol's Output from HW 4 Example 7");
let number = Math.floor(Math.random()* 100) + 1
let attempt = 0
let input;
while (input !== number) {
  input = (prompt("Guess a number between 1 and 100."))
  if (input === null) {
    console.log("You have exited the game.")
    break;}
    input = Number(input);
  if (isNaN(input)) {
    console.log("Please enter a valid number.")
    continue;}
    attempt++
if (input < number) {
  console.log("Too low, guess again.")}
 else if (input > number) {
  console.log("Too high, guess again.");
}
  else {
  console.log(`Correct! It took you ${attempt} attempts to guess the correct number.`)
}
}