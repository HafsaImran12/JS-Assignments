// CHAPTER NO 35-38

// 02.

// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your second name:");

// function greet(fName,lName) {
//     document.write(`Assalamualaikum ${fName} ${lName}`);
// }

// greet(firstName, lastName);

// 03.

// let num1 = parseInt(prompt("Enter first number"));
// let num2 = parseInt(prompt("Enter second number"));

// let add = (val1,val2)=> val1 + val2;
// console.log(`${num1} + ${num2} = ${add(num1,num2)}`);

// 04.

// let num1 = parseInt(prompt("Enter first number"));
// let operator = prompt("Enter Operator(+, -, *, /)");
// let num2 = parseInt(prompt("Enter second number"));

// let calculate = (val1, val2, oper) => {
//   if (oper == "+") {
//     document.write(`${val1} ${oper} ${val2} = ${val1 + val2}`);
//   } else if (oper == "-") {
//     document.write(`${val1} ${oper} ${val2} = ${val1 - val2}`);
//   } else if (oper == "*") {
//     document.write(`${val1} ${oper} ${val2} = ${val1 * val2}`);
//   } else if (oper == "/") {
//     document.write(`${val1} ${oper} ${val2} = ${val1 / val2}`);
//   } else {
//     document.write(`Invalid Input`);
//   }
// };
// calculate(num1, num2, operator);

// 05.

// let square = (num) => num * num
// document.write(square(2));

// 06.

// let fact = (n) => {
//   let result = 1;

//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }

//   return result;
// };

// let number = parseInt(prompt("Enter a number"));

// document.write(`Factorial of ${number} is ${fact(number)}`);

// 07.

// let startNum=parseInt(prompt("Enter start number"))
// let endNum=parseInt(prompt("Enter end number"))

// let count = (num) => {
//   for (let i = startNum; i <= endNum; i++){
//     document.write(`${i} <br/>`);

//   }
// }
// count()

// 09.

// let area = (width, height) => {
//   let A = width * height;
//   return A
// };
// document.write(area(3,4));
// -------------------------------
// let area = (width, height) => width * height;
// document.write(area(3,4));

// 10.

// let str = pal => {
//     let reverse= pal.split("").reverse().join("")

//     if (pal == reverse) {
//         return`${pal} is Palindrome`
//     } else {
//         return`${pal} is not Palindrome`
//     }
// }
// document.write(str("noon"));

// 11.
