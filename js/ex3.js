console.log("Piersol's Output from HW 4 Example 3");

const r = Number(prompt("Enter the circle radius:"));
const circle = {
  circumference () {
    return 2 * Math.PI * r;
  },
  area() {
    return Math.PI * r ** 2;
  }
}
console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
