console.log("Piersol's Output from HW 4 Example 5");

let w = []
let input = ""
while (input.toLowerCase() !== "stop") {
  input = prompt("Please enter word(s) (type 'stop' to finish):")
  if (input.toLowerCase() !== "stop") {
    w.push(input); 
  }
}
if (w.length === 0) {
  console.log("No words to display, Stop was the first word entered.")
} else {
  console.log("You entered the following words:")
  for (let word of w) {
    console.log(word)
  }
}
