console.log("Piersol's Output from HW 4 Example 6");
let word = String(prompt("Please enter a word"))
function vp (word) {
  let vowels = ['a','e','i','o','u','y']
  let count = 0
  word = word.toLowerCase()
for (let x of word) {
  if (vowels.includes(x)) {
    count++
  }
}
return count;
}
function palindrome (word) { 
  word = word.toLowerCase()
  let wordreverse = word.split("").reverse().join('')
  return word === wordreverse
}
let vc = vp(word)
let pc = palindrome(word)

if (pc) {
  console.log(`${word} contains ${vc} vowels and is a palindrome.`);
} else {
  console.log(`${word} contains ${vc} vowels and is not a palindrome.`);
}