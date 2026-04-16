// CHAPTER 05

// Question 01
document.write(`<h3>Answer: 1</h3>`);
let a = +prompt("Enter your first number"),
    b = +prompt("Enter your second number");
let c = a + b;
document.write(`Sum of ${a} and ${b} is ${c}`);

// Question 02
document.write(`<h3>Answer: 2</h3>`);
c = a - b;
document.write(`Subtraction of ${a} and ${b} is ${c} <br/>`);
c = a * b;
document.write(`Multiplication of ${a} and ${b} is ${c} <br/>`);
c = a / b;
document.write(`Division of ${a} and ${b} is ${c} <br/>`);
c = a % b;
document.write(`Modulus of ${a} and ${b} is ${c}`);

// Question 03
document.write(`<h3>Answer: 3</h3>`);
// a)
let num;
// b)
document.write(`Value after variable declaration is: ${num} <br/>`);
// c)
num = 5;
// d)
document.write(`Initial value: ${num} <br/>`);
// e)
num++;
// f)
document.write(`Value after increment: is ${num} <br/>`);
// g)
num = num + 7;
// h)
document.write(`Value after addition: is ${num} <br/>`);
// i)
num--;
// j)
document.write(`Value after decrement: is ${num} <br/>`);
// k)
num = num % 3;
// l)
document.write(`The remainder is: ${num} <br/>`);

// Question 4
document.write(`<h3>Answer: 4</h3>`);
let ticketPrice = 600;
document.write(
  `Total cost to buy 5 tickets to a movie is ${ticketPrice * 5} PKR`,
);

// Question 5
document.write(`<h3>Answer: 5</h3>`);
// let tableNum = +prompt(`Enter table number`);
let tableNum =4;
let count = 1;
document.write(`Table of ${tableNum} <br/>`);
document.write(`${tableNum} x ${count} = ${tableNum} <br/>`);
count++
document.write(`${tableNum} x ${count} = ${tableNum * count} <br/>`);
count++
document.write(`${tableNum} x ${count} = ${tableNum * count} <br/>`);
count++
document.write(`${tableNum} x ${count} = ${tableNum * count} <br/>`);
count++
document.write(`${tableNum} x ${count} = ${tableNum * count} <br/>`);
count++
document.write(`${tableNum} x ${count} = ${tableNum * count} <br/>`);
count++
document.write(`${tableNum} x ${count} = ${tableNum * count} <br/>`);
count++
document.write(`${tableNum} x ${count} = ${tableNum * count} <br/>`);
count++
document.write(`${tableNum} x ${count} = ${tableNum * count} <br/>`);
count++
document.write(`${tableNum} x ${count} = ${tableNum * count} <br/>`);

// Question 6
// a
let c = 25
// b
let f = (c * 9 / 5) + 32
console.log(`${c} °C is ${f} °F`);
// c
let f2 = 70;
// d
let c2 = (f2 - 32) * 5 / 9
console.log(`${f2} °F is ${c2} °C`);

// Question 7
document.write(`<h3>Answer: 7</h3>`);
let item1 = 650;
let item2 = 100;
let quantityItem1 = 3;
let quantityItem2 = 7;
let shippingCharges = 100;

document.write(`Price of item 1 is ${item1} <br/>`);
document.write(`Quantity of item 1 is ${quantityItem1} <br/>`);
document.write(`Price of item 2 is ${item2} <br/>`);
document.write(`Quantity of item 2 is ${quantityItem2} <br/>`);
document.write(`Shipping Charges ${shippingCharges} <br/>`);
document.write(`<br/>`);
document.write(
  `Total cost of your order is ${item1 * quantityItem1 + item2 * quantityItem2 + shippingCharges}`,
);

// Question 8
document.write(`<h3>Answer: 8</h3>`);
let totalMarks = 980;
let marksObtained = 804;
document.write(`Total marks: ${totalMarks} <br/>`);
document.write(`Marks obtained: ${marksObtained} <br/>`);
document.write(`Percentage: ${(marksObtained / totalMarks) * 100} %`);

// Question 9
document.write(`<h3>Answer: 9</h3>`);
let dollar = 10 * 279;
let riyal = 25 * 74;
document.write(`<h2>Currency in PKR</h2>`);
document.write(`Total currency: ${dollar + riyal}`);
