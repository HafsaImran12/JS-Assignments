// CHAPTER 06

// Question 01

// let a=10;
// document.write(`Result <br/>`)
// document.write(`The value of a is $a} <br/>`);
// document.write(`---------------------------------- <br/>`);

// document.write(`The value of +a is: ${+a} <br/>`);
// document.write(`Now the value of a is: $a}`);

// document.write(`<br/>`);
// document.write(`<br/>`);
// document.write(`The value of a++ is: $a++} <br/>`);
// document.write(`Now the value of a is: $a}`);

// document.write(`<br/>`);
// document.write(`<br/>`);
// document.write(`The value of -a is: ${-a} <br/>`);
// document.write(`Now the value of a is: $a}`);

// document.write(`<br/>`);
// document.write(`<br/>`);
// document.write(`The value of a-- is: $a--} <br/>`);
// document.write(`Now the value of a is: $a}`);

// Question 02

// let a=2;
// let b=1;

// document.write(`a is: ${a} <br/>`);
// document.write(`b is: ${b} <br/>`);

// document.write(`Result is: ${a++} <br/>`);
// 2

// document.write(`Result is: ${--a - --b + ++b} <br/>`);
// 1 -  0  +  1 = 0

// document.write(`Result is: ${--a - --b + ++b + b--} <br/>`);
//  1 -  0  +  2  +  1

// Question 03

// let userName = prompt("Enter Your Name");
// document.write(`Hey: ${userName}`);

let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");
let sum = num1 + num2;
document.write(`Sum of ${num1} and ${num2} is ${sum}`)