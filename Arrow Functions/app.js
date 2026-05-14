// // 1. Write an arrow function to add two numbers.

// let userNumber1= +prompt("Enter first number")
// let userNumber2= +prompt("Enter second number")
// let sum = (num1, num2) => num1 + num2;
// console.log(sum(userNumber1,userNumber2));

// // 2. Write an arrow function to check if a number is even or odd.

// let userNumber = +prompt("Enter a number")
// let checkNumber = (num) => {
//     if(userNumber % 2 == 0) {
//         alert(`${num} is even number`);
//     } else {
//         alert(`${num} is odd number`)
//     }
// }
// checkNumber(userNumber)

// // 3. Write an arrow function to return the greater of two numbers.

// let userNumber1 = +prompt("Enter first number");
// let userNumber2 = +prompt("Enter second number");
// let greater = (num1, num2) => {
//   if (num1 > num2) {
//     alert(`${num1} is greater than ${num2}`);
//   } else if (num1 < num2) {
//     alert(`${num1} is less than ${num2}`);
//   } else {
//     alert("Not a Number");
//   }
// };
// greater(userNumber1, userNumber2);

// // 4. Write an arrow function that returns Pass if marks > 40, otherwise Fail.

// let userMarks = +prompt("Enter your marks")
// let marks = () => {
//     if (userMarks > 40) {
//         alert(`Congratulations! You will pass`)
//     } else {
//         alert("Fail")
//     }
// }
// marks(userMarks)

// // 5. Write an arrow function to check if a number is positive or negative.

// let userNumber = +prompt("Enter a number")
// let checks = () =>{
//     if (userNumber > 0) {
//         alert("Positive Number")
//     } else if (userNumber < 0) {
//         alert("Negative Number")
//     } else {
//         alert("Zero")
//     }
// }
// checks(userNumber)

// // 6. Write an arrow function to return the square of a number.

// let square = (num) => num * num;
// console.log(square(3));

// // 7. Write an arrow function to convert a string to uppercase.

// let str = (upper) => upper.toUpperCase()
// console.log(str("hello"));

// // 8. Write an arrow function to convert a string to lowercase.

// let str = (lower) => lower.toLowerCase()
// console.log(str("HELLO"));

// // 9. Write an arrow function to check if a string is empty.

// let str = prompt("Enter something");

// let checkString = (text) => {
//     if (text === "") {
//         console.log("Empty string");
//     } else {
//         console.log("Not empty");
//     }
// }

// checkString(str);

// // 10. Write an arrow function to return the first character of a string.

// let firstL = (text) => text[0]
// console.log(firstL("hello"));

// // 11. Write an arrow function to return the first element of an array.

// let firstEl = (arr) => arr[0]
// console.log(firstEl(["apple","mango","orange"]));

// // 12. Write an arrow function to return the last element of an array.

// let lastEl = (arr) => arr[arr.length - 1]
// console.log(lastEl(["red", "green","pink","blue"]));

// // 13. Write an arrow function to count the number of elements in an array.

// let lastEl = (arr) => arr.length
// console.log(lastEl(["red", "green","pink","blue"]));

// // 14. Write an arrow function to return all even numbers from an array.

// let evenNum = (arr) => {
//   for(let num of arr){
//     if (num % 2 == 0) {
//       console.log(num);

//     }
//   }
// };
// evenNum([1, 2, 3, 4, 5, 6, 7, 8]);

// // 15. Write an arrow function to return all odd numbers from an array.

// let oddNum = (arr) => {
//   for(let num of arr){
//     if (num % 2 != 0) {
//       console.log(num);
//     }
//   }
// };
// oddNum([1, 2, 3, 4, 5, 6, 7, 8]);

// // 16. Write an arrow function to return numbers greater than 10 from an array.

// let greaterNum = (arr) => {
//   for(let num of arr){
//     if (num >10) {
//       console.log(num);
//     }
//   }
// };
// greaterNum([2,4,3,5,11,34,543,24,10]);

// // 17. Write an arrow function to find the largest number in an array.

// let largestNum = (arr) => {
//   let largest = arr[0];

//   for (let num of arr) {
//     if (num > largest) {
//       largest = num;
//     }
//     }
//     return largest
// };
// console.log(largestNum([12,43,21,76]));

// // 18. Write an arrow function to find the smallest number in an array.

// let smallestNum = (arr) => {
//   let smallest = arr[0];

//   for (let num of arr) {
//     if (num < smallest) {
//       smallest = num;
//     }
//     }
//     return smallest;
// };
// console.log(smallestNum([12,43,21,76]));

// // 19. Write an arrow function to return only string values from a mixed array.

// let lastItem = (arr) => {
//     for (let items of arr) {
//         if (typeof items == "string") {
//             console.log(items);

//         }
//     }
// }

// lastItem([true,4,"hello",null,undefined])

// // 20. Write an arrow function to remove the last element of an array.

// let removeArr = (arr) => {
//   arr.pop();
//   return arr;
// };
// console.log(removeArr(["rose", "lily", "jasmine", "sunflowers"]));

// // 21. Write an arrow function to sum all numbers in an array.

// let sumArr = (arr) => {
//     let sum = 0;
//     for (let num of arr) {
//         sum += num;
//     }
//     return sum;
// }
// console.log(sumArr([6,4,6,1,33]))

// // 22. Write an arrow function to count how many vowels are in a string.

// let checkVowels = (string) => {
//     let count = 0;

//     for (let i = 0; i < string.length; i++) {
//         if (
//             string[i] == "a" ||
//             string[i] == "e" ||
//             string[i] == "i" ||
//             string[i] == "o" ||
//             string[i] == "u"
//         ) {
//             count++;
//         }
//     }

//     console.log(`Vowels count: ${count}`);
// }

// checkVowels("JavaScript");

// // 23. Write an arrow function to remove all spaces from a string.

// let removeSpace = (str) => str.trim()
// console.log(removeSpace("     hey   "));

// // 24. Write an arrow function to check if a word is present in a sentence.

// let userWord = prompt("Which word do you want to check")
// let word = (check) => {
//     for (i = 0; i < check.length; i++){
//         if (check[i] == userWord) {
//             console.log(`${userWord} is present in this string: ${check}`);
//         }
//     }
// }
// word("How are you")

// // 25. Write an arrow function to return the first word of a sentence.

// let firstWord = (str) => str.split(" ")[0];
// console.log(firstWord("Hello how are you"));

// // 26. Write an arrow function to return the last word of a sentence.

// let lastWord = (str) => {
//     return str.split(" ")[str.split(" ").length-1]
// };
// console.log(lastWord("Hello how are you"));

// // 27. Write an arrow function to reverse a string.

// let reverse = (str) => str.split("").reverse().join("")
// console.log(reverse("Hello how are you"));

// // 28. Write an arrow function to check if a number is divisible by 3.

// let userNumber = +prompt("Enter a number")
// let checkNumber = (num) => {
//     if(userNumber % 3 == 0) {
//         alert(`Number is divisible by 3`);
//     } else {
//         alert(`Number is not divisible by 3`)
//     }
// }
// checkNumber(userNumber)


// // 29. Write an arrow function to check if a string contains only letters.

// // 30. Write an arrow function to convert a sentence into an array of words.
