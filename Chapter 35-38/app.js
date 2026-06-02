// CHAPTER NO 35-38

// 02.

// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your second name:");

// function greet(fName,lName) {
//     document.write(`Assalamualaikum ${fName} ${lName}`);
// }

// greet(firstName, lastName);

// 03.

// let num1 = Number(prompt("Enter first number"));
// let num2 = Number(prompt("Enter second number"));

// let add = (val1,val2)=> val1 + val2;
// console.log(`${num1} + ${num2} = ${add(num1,num2)}`);

// 04.

// let num1 = Number(prompt("Enter first number"));
// let operator = prompt("Enter Operator(+, -, *, /)");
// let num2 = Number(prompt("Enter second number"));

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

// let number = Number(prompt("Enter a number"));

// document.write(`Factorial of ${number} is ${fact(number)}`);

// 07.

// let startNum=Number(prompt("Enter start number"))
// let endNum=Number(prompt("Enter end number"))

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
// let width=+prompt('Enter width of triangle');
// let height=+prompt('Enter height of triangle');
// let result=areaCalculate(width,height);
// document.write(result)

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

// let upperCase = (str) => {
//     let arr = str.split(" ");
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++){
//         newArr.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1))
//     }
//     return newArr.join(" ")
// }

// let str = "the quick brown fox"
// let result = upperCase (str)
// document.write(`Example string: ${str} <br/>`)
// document.write(`Expected string: ${result} <br/>`)

// 12.

// let longest = (str) => {
//     let split = str.split (" ")
//     let longestWord = split [0]
//     for (let i = 0; i < split.length; i++){
//         if (split[i].length > longestWord.length) {
//             longestWord = split[i]
//         }
//     }
//     return longestWord
// }

// let str = "Web Development Tutorial";
// let result = longest(str);

// document.write(`EXAMPLE STRING : ${str} <br/>`);
// document.write(`LONGEST STRING : ${result}`);

// 13.

// let countLetter = (str, letter) => {
//     let count = 0;
//     for (let i = 0; i < str.length; i++){
//         if (str[i] === letter) {
//             count++;
//         }
//     }

//     return count;
// }
// document.write(countLetter("JSResourceS.com", "e"));
