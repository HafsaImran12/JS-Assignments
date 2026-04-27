// Question no 01

// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let fullName = firstName + lastName;
// alert(`Hello ${fullName}`);

// Question no 02

// let userInput = prompt("Enter your favourite mobile model");
// document.write(`My favourite phone is: ${userInput}`);
// document.write("<br/>");
// document.write(`Length of string is: ${userInput.length}`)

// Question no 03

// let str = "Pakistani";
// let newStr =str.indexOf("n");
// document.write(`String ${str}`);
// document.write("<br/>");
// document.write(`Index of 'n' is ${newStr}`);

// Question no 04

// let str = "Hello World";
// let newStr =str.lastIndexOf("l");
// document.write(`String ${str}`);
// document.write("<br/>");
// document.write(`Last index of 'l' is ${newStr}`);

// Question no 05

// let str = "Pakistani";
// let newStr =str.charAt(3);
// document.write(`String ${str}`);
// document.write("<br/>");
// document.write(`Character at index 3 is ${newStr}`);

// Question no 06

// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let fullName = firstName.concat(lastName);
// alert(`Hello ${fullName}`);

// Question no 07

// let str = "Hyderabad"
// let str2 = str.replace("Hyderabad", "Islamabad");
// document.write(str)
// document.write("<br/>");
// document.write(str2)

// Question no 08

// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let newMessage = message.replace(/and/g, "&");
// document.write(message);
// document.write("<br/>");
// document.write(newMessage);

// Question no 09

// let str = "472";
// let newStr = Number(str);
// document.write(`Value: ${str}`);
// document.write("<br/>");
// document.write(`Type: ${typeof str}`);
// document.write("<br/>");
// document.write(`Value: ${newStr}`);
// document.write("<br/>");
// document.write(`Type: ${typeof newStr}`);

// Question no 10

// let userInput = prompt("Enter a fruit");
// let upperCase = userInput.toUpperCase();
// document.write(`User input: ${userInput}`);
// document.write("<br/>");
// document.write(`Upper case: ${upperCase}`);

// Question no 11

// let userInput = prompt("Enter a variable");
// let titleCase = userInput[0].toUpperCase() + userInput.slice(1).toLowerCase();
// document.write(`User input: ${userInput}`);
// document.write("<br/>");
// document.write(`Title case: ${titleCase}`);

// Question no 12

// let num = 35.36;
// let result = num.toString().replace(".", "");
// document.write(`Number: ${num}`);
// document.write("<br/>");
// document.write(`Result: ${result}`);

// Question no 13

// let userName;
// for (let i = 0; ; i++) {
//   userName = prompt("Enter your username");
//   if (
//     userName.includes("@") ||
//     userName.includes(".") ||
//     userName.includes(",") ||
//     userName.includes("!")
//   ) {
//     alert("Please enter a valid username");
//   } else {
//     alert(`Valid username: ${userName}`);
//     break;
//   }
// }

// Question no 13

// let items = ["cookie", "cake", "apple pie", "chips", "patties"];
// let userInput = prompt("Welcome to ABC Bakery. What do you want to order Sir/Maam?");
// let searchItem = userInput.toLowerCase();
// let idx= items.indexOf(searchItem)
// if (searchItem == items) {
//     document.write(`${searchItem} is available at index ${idx} in our bakery`)
// } else {
//     document.write(`We are sorry. ${searchItem} is <b>not available</b> in our bakery`)
// }

let items = ["cookie", "cake", "apple pie", "chips", "patties"];

let userInput = prompt("Welcome to ABC Bakery. What do you want to order Sir/Maam?");

// case insensitive banane ke liye
let searchItem = userInput.toLowerCase();
let lowerItems = items.map(item => item.toLowerCase());

// index find karo
let idx = lowerItems.indexOf(searchItem);

if (idx !== -1) {
    document.write(`${userInput} is available at index ${idx} in our bakery`);
} else {
    document.write(`We are sorry. ${userInput} is <b>not available</b> in our bakery`);
}

// Question no 12
