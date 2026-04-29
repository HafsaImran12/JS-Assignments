// // CHAPTER 06-09

// // Question 01

// document.write(`<h3>Answer: 1</h3>`);

// let num = +prompt(`Enter a number`);
// document.write(`Result <br/>`);
// document.write(`The value of num is ${num} <br/>`);
// document.write(`---------------------------------- <br/>`);

// document.write(`The value of ++num is: ${++num} <br/>`);
// document.write(`Now the value of num is: ${num}`);

// document.write(`<br/>`);
// document.write(`<br/>`);
// document.write(`The value of a++ is: ${num++} <br/>`);
// document.write(`Now the value of num is: ${num}`);

// document.write(`<br/>`);
// document.write(`<br/>`);
// document.write(`The value of --num is: ${--num} <br/>`);
// document.write(`Now the value of num is: ${num}`);

// document.write(`<br/>`);
// document.write(`<br/>`);
// document.write(`The value of num-- is: ${num--} <br/>`);
// document.write(`Now the value of num is: ${num}<br/>`);

// // Question 02

// document.write(`<h3>Answer: 2</h3>`);

// let a = 2;
// let b = 1;

// document.write(`a is: ${a} <br/>`);
// document.write(`b is: ${b} <br/>`);

// document.write(`Result for first equation is: ${a++} <br/>`);
// // 2

// document.write(`Result for second equation is: ${--a - --b + ++b} <br/>`);
// // 1 -  0  +  1 = 0

// document.write(`Result for third equation is: ${--a - --b + ++b + b--} <br/>`);
// //  1 -  0  +  2  +  1

// // Question 03

// document.write(`<h3>Answer: 3</h3>`);

// let userName = prompt("Enter Your Name");
// document.write(`Hey: ${userName}`);

// // Question 04

// document.write(`<h3>Answer: 4</h3>`);

// let tableNum = +prompt(`Enter table number`,3);
// let count = 1;
// document.write(`Table of ${tableNum} <br/>`);
// document.write(`${tableNum} x ${count} = ${tableNum} <br/>`);
// count++
// document.write(`${tableNum} x ${count} = ${tableNum * count} <br/>`);
// count++
// document.write(`${tableNum} x ${count} = ${tableNum * count} <br/>`);
// count++
// document.write(`${tableNum} x ${count} = ${tableNum * count} <br/>`);
// count++
// document.write(`${tableNum} x ${count} = ${tableNum * count} <br/>`);
// count++
// document.write(`${tableNum} x ${count} = ${tableNum * count} <br/>`);
// count++
// document.write(`${tableNum} x ${count} = ${tableNum * count} <br/>`);
// count++
// document.write(`${tableNum} x ${count} = ${tableNum * count} <br/>`);
// count++
// document.write(`${tableNum} x ${count} = ${tableNum * count} <br/>`);
// count++
// document.write(`${tableNum} x ${count} = ${tableNum * count} <br/>`);

// // Question 05

// document.write(`<h3>Answer: 5</h3>`);

// // a
// let sub1 = prompt(`Enter first subject`);
// let sub2 = prompt(`Enter second subject`);
// let sub3 = prompt(`Enter third subject`);

// //b
// let totalMarksPerSubject = 100;

// // c
// let marks1 = +prompt(`Enter obtained marks for ${sub1} subject`);
// // d
// let marks2 = +prompt(`Enter obtained marks for ${sub2} subject`);
// let marks3 = +prompt(`Enter obtained marks for ${sub3} subject`);

// // e
// let totalMarks = totalMarksPerSubject * 3;
// let obtainedMarks = marks1 + marks2 + marks3;
// let percentage = (obtainedMarks / totalMarks) * 100;

// // show result
// document.write(`<table border='1' style="border-collapse:collapse; cellpadding="10">`);
// document.write(`<tr><th>Subjects</th><th>Total Marks</th><th>Marks Obtained</th><th>Percentage</th><tr/>`);
// document.write(`<tr><td>${sub1}</td><td>${totalMarksPerSubject}</td><td>${marks1}</td><td>${marks1}%</td></tr>`)
// document.write(`<tr><td>${sub3}</td><td>${totalMarksPerSubject}</td><td>${marks3}</td><td>${marks2}%</td></tr>`)
// document.write(`<tr><td>${sub2}</td><td>${totalMarksPerSubject}</td><td>${marks2}</td><td>${marks3}%</td></tr>`)
// document.write(`<tr><th></th><th>${totalMarks}</th><th>${obtainedMarks}</th><th>${percentage.toFixed(2)}</th></tr>`)

// document.write(`</table>`);