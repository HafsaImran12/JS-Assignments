// CHAPTER 17-20

// 01.
// let multiDimenArray = [[], [], []];

// 02.
// let matrix = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1],
// ];
// for (i = 0; i < matrix.length; i++) {
//   for (j = 0; j < matrix[i].length; j++) {
//     document.write(matrix[i][j]);
//   }
//   document.write("<br/>");
// }

// 03.
// for (let i = 1; i <= 10; i++) {
//   document.write(i);
//   document.write("<br/>");
// }

// 04.

// let userTable = +prompt("Enter a table number");
// let userLength = +prompt("Enter a number to show its multiplication table");
// for (let i = 1; i <= userLength; i++){
//     document.write(`${userTable} x ${i} = ${userTable*i}`)
//     document.write("<br/>")
// }

// 05.
// let fruits = ["apple", "banana", "mango", "orange", "strawbery"];
// for (let i = 0; i < fruits.length; i++) {
//   document.write(fruits[i] + "<br/>");
// }
// document.write("<br/>");
// for (let i = 0; i < fruits.length; i++) {
//   document.write(`Element at index ${i} is ${fruits[i]}<br/>`);
// }

// 06.

document.write("<h4>Counting:</h4>")
for (let i = 1; i <= 15; i++) {
  document.write(i + ",");
}

document.write("<h4>Reverse Counting:</h4>")
for (let i = 10; i > 0; i--) {
    document.write(i + ",");
}

document.write("<h4>Even:</h4>")
for (let i = 1; i <= 20; i++){
    if (i % 2 == 0) {
        document.write(i + ",")
    }
}

document.write("<h4>Odd:</h4>")
for (let i = 1; i <= 20; i++){
    if (i % 2 != 0) {
        document.write(i + ",")
    }
}

document.write("<h4>Series:</h4>")
for (let i = 1; i <= 20; i++){
    if (i % 2 == 0) {
        document.write(i + "k,")
    }
}