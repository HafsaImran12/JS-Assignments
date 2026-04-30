// CHAPTER 21-15

// 01.

// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let fullName = firstName + lastName;
// alert(`Hello ${fullName}`);

// 02.

// let userInput = prompt("Enter your favourite mobile model");
// document.write(`My favourite phone is: ${userInput}`);
// document.write("<br/>");
// document.write(`Length of string is: ${userInput.length}`)

// 03.

// let str = "Pakistani";
// let newStr =str.indexOf("n");
// document.write(`String ${str}`);
// document.write("<br/>");
// document.write(`Index of 'n' is ${newStr}`);

// 04.

// let str = "Hello World";
// let newStr =str.lastIndexOf("l");
// document.write(`String ${str}`);
// document.write("<br/>");
// document.write(`Last index of 'l' is ${newStr}`);

// 05.

// let str = "Pakistani";
// let newStr =str.charAt(3);
// document.write(`String ${str}`);
// document.write("<br/>");
// document.write(`Character at index 3 is ${newStr}`);

// 06.

// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let fullName = firstName.concat(lastName);
// alert(`Hello ${fullName}`);

// 07.

// let str = "Hyderabad"
// let str2 = str.replace("Hyderabad", "Islamabad");
// document.write(str)
// document.write("<br/>");
// document.write(str2)

// 08.

// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let newMessage = message.replace(/and/g, "&");
// document.write(message);
// document.write("<br/>");
// document.write(newMessage);

// 09.

// let str = "472";
// let newStr = Number(str);
// document.write(`Value: ${str}`);
// document.write("<br/>");
// document.write(`Type: ${typeof str}`);
// document.write("<br/>");
// document.write(`Value: ${newStr}`);
// document.write("<br/>");
// document.write(`Type: ${typeof newStr}`);

// 10.

// let userInput = prompt("Enter a fruit");
// let upperCase = userInput.toUpperCase();
// document.write(`User input: ${userInput}`);
// document.write("<br/>");
// document.write(`Upper case: ${upperCase}`);

// 11.

// let userInput = prompt("Enter a variable");
// let titleCase = userInput[0].toUpperCase() + userInput.slice(1).toLowerCase();
// document.write(`User input: ${userInput}`);
// document.write("<br/>");
// document.write(`Title case: ${titleCase}`);

// 12.

// let num = 35.36;
// let result = num.toString().replace(".", "");
// document.write(`Number: ${num}`);
// document.write("<br/>");
// document.write(`Result: ${result}`);

// 13.

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

// 14.

// let items = ["cookie", "cake", "apple pie", "chips", "patties"];
// let userInput = prompt(
//   "Welcome to ABC Bakery. What do you want to order Sir/Maam?",
// );
// userInput = userInput.toLowerCase();
// let check = false;
// let i;
// for (i = 0; i <= items.length; i++) {
//   if (userInput === items[i]) {
//     check = true;
//   }
// }
// if (check) {
//   document.write(`${userInput} is available at index ${i} in our bakery`);
// } else {
//   document.write(
//     `We are sorry. ${userInput} is <b>not available</b> in our bakery`,
//   );
// }

// 15.

// let password = prompt("Enter your password: ");
// let passwordLength = false;
// let passwordChar = false;
// let passwordInt = false;
// let passwordStart = true;

// // Checking for Alphabet
// for (i = 0; i < password.length; i++) {
//   let charValue = password[i].charCodeAt(0);

//   // Checking for UpperCase Letters
//   if (charValue >= 65 && charValue <= 90) {
//     passwordChar = true;
//   }

//   // Checking for LowerCase Letters
//   else if (charValue >= 97 && charValue <= 122) {
//     passwordChar = true;
//   }
// }

// // Checking for Numbers
// for (i = 0; i < password.length; i++) {
//   let charValue = password[i].charCodeAt(0);
//   if (charValue >= 48 && charValue <= 57) {
//     passwordInt = true;
//   }
// }

// // Checking for first letter
// let charValue = password.charCodeAt(0);
// if (charValue >= 48 && charValue <= 57) {
//   passwordStart = false;
// }

// // Checking for Length
// if (password.length >= 6) {
//   passwordLength = true;
// }

// if (
//   passwordChar === false ||
//   passwordInt === false ||
//   passwordLength === false ||
//   passwordStart === false
// ) {
//   alert("Enter valid Password");
// } else {
//   alert("Password Approved");
// }

// 16.

// let university = "University of Karachi";
// let arr = university.split("");
// for (let i = 0; i < arr.length; i++){
//     document.write(`${arr[i]} <br/>`);
// }

// 17.

// let userChar = prompt("Enter a word");
// let lastChar = userChar[userChar.length - 1];
// document.write(`Last character of your word is ${lastChar}`);

// 18.

// let str = "The quick brown fox jumps over the lazy dog.";

// document.write(`Text: ${str}`);
// document.write(`<br/>`);

// let lowerStr = str.toLowerCase();
// let words = lowerStr.split(" ");
// let count = 0;

// for (let i = 0; i < str.length; i++){
//     if (words[i] === "the") {
//         count++;
//     }
// }
// document.write(`Occurance of 'the': ${count}`);
