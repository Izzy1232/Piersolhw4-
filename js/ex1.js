console.log("Piersol's Output from HW 4 Example 1");

let num1 = Number(prompt("Please enter first number"))
let num2 = Number(prompt("Please enter second number"))
let operator = prompt("Please enter a mathematical operator (+, -, *, /).")

function math () {
  if (operator === "+") {
    return num1 + num2
  }
    else if (operator === "-") {
      return num1 - num2
    }
    else if (operator === "*") {
      return num1 * num2
    }
    else if (operator === "/") {
      return num1 / num2
    }
      else {
        console.log("Invalid entry")
      }
}
console.log (math())
