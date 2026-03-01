// Question 01
let a = 3,
  b = 5;
let c = a + b;
document.write("<h3>Answer 01</h3>");
document.write("<h4>Simple Mathmatics</h4>");
document.write("Sum of 3 and 5 is " + c);

// Question 02
document.write("<h3>Answer 02</h3>");
let d = a - b;
document.write("subtraction of 3 and 5 is " + d + "<br/>");
let e = a * b;
document.write("Multiplication of 3 and 5 is " + e + "<br/>");
let f = a / b;
document.write("Division of 3 and 5 is " + f + "<br/>");
let g = a % b;
document.write("Modulus of 3 and 5 is " + g);

// Question 03
document.write("<h3>Answer 03</h3>");
// a)
let number;
// b)
document.write("Value after variable declaration is: undefined <br/>");
// c)
number = 5;
// d)
document.write("Initial value: " + number + "<br/>");
// e)
number++;
// f)
document.write("Value after increment is: " + number + "<br/>");
// g)
number = number + 7;
// h)
document.write("Value after addition is: " + number + "<br/>");
// i)
number--;
// j)
document.write("Value after decrement is: " + number + "<br/>");
// k)
number = number % 3;
// l)
document.write("The remainder is : " + number);

// Question 04)
document.write("<h3>Answer 04</h3>");
document.write("<h4>Movie tickets</h4>");
let ticketPrice = 600;
document.write("Cost of one movie ticket is " + ticketPrice + " PKR. <br/>");
ticketPrice = ticketPrice * 5;
document.write(
  "Total cost to buy 5 tickets to a movie is " + ticketPrice
);

// Question 05)
document.write("<h3>Answer 05</h3>");
document.write("<h4>Table of 5</h4>");
let num = 5;
for (let i = 1; i <= 10; i++) {
    document.write(num + "x" + i + "=" + num * i + "<br/>");
}

// Question 07)
document.write("<h3>Answer 07</h3>");
let item1 = 650;
let orderQuantity1 = 3;
let item2 = 100;
let orderQuantity2 = 7;
let shippingCharges = 100;
document.write("<h4>Shopping Cart</h4>");
document.write("Price of item 1 is " + item1 + "<br/>");
document.write("Price of item 2 is " + item2 + "<br/>");
document.write("Ordered quantity of item 1 is " + orderQuantity1 + "<br/>");
document.write("Ordered quantity of item 2 is " + orderQuantity2 + "<br/>");
document.write("Shipping charges: " + shippingCharges + "<br/>");
document.write(
  "Total cost of your order is " +
    (item1 * orderQuantity1 + item2 * orderQuantity2 + shippingCharges)
);

// Question 08
document.write("<h3>Answer 08</h3>");
document.write("<h4>Student Percentage</h4>");
let totalMarks = 980;
let marksObtained = 804;
document.write("Total Marks: " + totalMarks + "<br/>");
document.write("Marks Obtained: " + marksObtained + "<br/>");
document.write(
  "Percentage: " + (marksObtained / totalMarks) * 100 + "%"
);

// Question 09
document.write("<h3>Answer 09</h3>");
document.write("<h4>Currency in PKR</h4>");
let usDollor = 10;
let saudiRiyal = 25;
document.write(
  "Total currency in PKR " + (usDollor * 279.04 + saudiRiyal * 74.49)
);