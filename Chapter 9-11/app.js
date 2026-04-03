// Question 01

// let cityName = prompt("Enter your city name");
// if (cityName === "karachi") {
//   alert("Welcome to the city of lights");
// } else {
//   alert(`Welcome to ${cityName}`);
// }

// Question 02

// let gender = prompt("Enter your gender");
// if (gender === "male") {
//   document.write("Good Morning Sir");
// } else {
//   document.write("Good Morning Maam");
// }

// Question 03

// let color = prompt("Enter traffic signal color name");

// if (color == "red") {
//   alert("Must Stop");
// }
// if (color == "yellow") {
//   alert("Ready to move");
// }
// if (color == "green") {
//   alert("Move Now");
// } else {
//   alert("This color is not included in traffic light color");
// }

// Question 04

// let remainingFuel = prompt("Enter the remaining fuel in the car.");
// let currentFuel = "0.25 litre";

// if (remainingFuel == currentFuel) {
//   alert("Please refill the fuel in your car");
// } else {
//     alert("Everything is fine, no action needed.")
// }

// Question 05
// a
// let a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }

// b
// let b = 82
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// c
// let c = 12;

// if (c++ === 12) {
//   alert("Condition 1 is true");
// }
// // e
// if (c === 13) {
//   alert("Condition 2 is true");
// }
// // f
// if (++c < 14) {
//   alert("Condition 3 is true");
// }
// if (c === 14) {
//   alert("Condition 4 is true");
// }

// d)
// let materialCost = 2000;
// let labourCost = 2000;
// let totalCost = materialCost + labourCost;
// if ((totalCost = materialCost + labourCost)) {
//   alert(`the cost equals: ${totalCost}`);
// }

// e)
// if (true) {
// console.log("true")
// }
// if (false) {
//     console.log("Flase");
// }
// if ("car" < "cat") {
//     alert("car is smaller than cat")
// }

let firstSub = +prompt("First subject marks");
let secSub = +prompt("Second subject marks");
let thirdSub = +prompt("Third subject marks");
let totalMarks = 300;
let obtainedMarks = firstSub + secSub + thirdSub;
let percentage = (obtainedMarks / totalMarks) * 100;
document.write("<bold>Mark Sheet</bold>");
document.write("<br>");
document.write(`Total Marks: ${totalMarks}`);
document.write("<br>");
document.write(`Marks Obtained: ${obtainedMarks}`);
document.write("<br>");
if (percentage >= 80) {
  document.write(`Percentage: ${percentage.toFixed(2)}% <br>`);
  document.write(`Grade: A-One <br>`);
  document.write(`Remarks: Excellent <br>`);
} else if (percentage >= 70) {
  document.write(`Percentage: ${percentage.toFixed(2)}%`);
  document.write(`Grade: A <br>`);
  document.write(`Remarks: Good <br>`);
} else if (percentage >= 60) {
  document.write(`Percentage: ${percentage.toFixed(2)}%`);
  document.write(`Grade: B <br>`);
  document.write(`Remarks: You need to improve <br>`);
} else {
  document.write(`Percentage: ${percentage.toFixed(2)}% <br>`);
  document.write(`Grade: Fail <br>`);
  document.write(`Remarks: Sorry <br>`);
}
