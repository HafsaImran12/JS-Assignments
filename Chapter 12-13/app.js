// Question 01

// let ch = prompt("Enter a Character or Number")
// let ascii = ch.charCodeAt(0)

// if (ascii >= 48 && ascii <=57) {
//     alert(`${ascii} is number`)
// } else if (ascii >= 65 && ascii <=90){
//     alert(`${ascii} is Uppercase Character`)
// } else if (ascii >= 97 && ascii <=122){
//     alert(`${ascii} is Lowercase Character`)
// }else {
//   console.log("Special Character");
// }

// Question 02
// let a = +prompt("Enter first number");
// let b = +prompt("Enter second number");
// if (a > b) {
//   alert(`${a} is greater than ${b}`);
// } else if (a < b) {
//   alert(`${a} is less than ${b}`);
// } else if (a == b) {
//   alert(`${a} is equal ${b}`);
// } else {
//   alert("Special character");
// }

// Question 03
// let num = +prompt("Enter Number");
// if (num > 0) {
//   alert("Positive Number");
// } else if (num < 0) {
//   alert("Negative Number");
// } else {
//   alert("Zero");
// }

// Question 04
let vowels = ["a", "e", "i", "o", "u"];
let character = prompt("Enter any character");
if (character == vowels) {
  alert(`True ${vowels} is a Vowel`);
} else {
  alert(`False`);
}
