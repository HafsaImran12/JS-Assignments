// CHAPTER 14-16

// 01.

// let studentNames = [];

// 02.

// let obj = {}

// 03.

// let fruits = ["apple", "mango", "Banana"];

// 04.

// let num = [1, 2, 3, 4];

// 05.

// let boolean = [true, false];

// 06.

// let mixedArrays = ["apple", 3, false, null, undefined];

// 07.

// let qualificaions = [
//   "ssc",
//   "hsc",
//   "bsc",
//   "bs",
//   "bcom",
//   "ms",
//   "m.fill",
//   "p.h.d",
// ];
// document.write(`<h2>Qualifications</h2>`);
// document.write(
//   `<ol><li>${qualificaions[0]}</li><li>${qualificaions[1]}</li><li>${qualificaions[2]}</li><li>${qualificaions[3]}</li><li>${qualificaions[4]}</li><li>${qualificaions[5]}</li><li>${qualificaions[6]}</li><li>${qualificaions[7]}</li><ol/>`,
// );

// 08.

// let studentNames = ["Ayesha", "Abdullah", "Usman"];
// let score = [320, 230, 480];
// let totalMarks = 500;
// document.write(`Score of ${studentNames[0]} is ${score[0]}. Percentage is ${score[0] / totalMarks * 100}% <br/>`)
// document.write(`Score of ${studentNames[1]} is ${score[1]}. Percentage is ${score[1] / totalMarks * 100}% <br/>`)
// document.write(`Score of ${studentNames[2]} is ${score[2]}. Percentage is ${score[2] / totalMarks * 100}% <br/>`)

// 09.

// let color = ["red", "orange", "green"];
// a
// let user = prompt("What color did you wants to add to the begining");
// document.write(color)
// color.unshift(user)
// document.write(`<br/>After adding your color: ${color}`)

// b
// let user = prompt("What color did you wants to add to the end");
// document.write(color);
// color.push(user);
// document.write(`<br/>After adding your color: ${color}`);

// c
// document.write(color)
// color.unshift("yellow","brown")
// document.write(`<br/>${color}`)

// // d
// color.shift()
// document.write(`<br/>${color}`)

// // e
// color.pop()
// document.write(`<br/>${color}`)

// // f
// let colors= ["pink","orange","brown","yellow"]
// document.write(colors);
// let userIdx;
// let userClr;
// colors.splice(userIdx = +prompt("At which index you wants to add the color"), 0, userClr = prompt("Enter a color name"));
// document.write(`<br/>After update: ${colors}`);

// // g
// let colors = ["pink", "orange", "brown", "yellow"];
// document.write(colors);
// let userIdx;
// let userClr;
// colors.splice(userIdx = +prompt("Which color you wants to delete"), userClr = prompt("Enter a color index"));
// document.write(`<br/>After update: ${colors}`);

// 10.

// let studentScores = [320, 230, 480, 120];
// document.write(studentScores)
// document.write("<br/>")
// studentScores.sort();
// document.write(`Order score of students ${studentScores}`);

// 11.

// let cities = ["Karachi", "lahore", "peshawar", "gilgit", "islamabad"];
// document.write(`Cities list: <br/>`);
// document.write(cities);
// document.write(`<br/> Selected Cities list: <br/>`);
// let newCities = cities.slice(2,4)
// document.write(newCities);

// 12.

// let str = ["This", "is", "my", "cat"];
// console.log(`Array:`);
// console.log(str);
// let newStr = str.toString();
// newStr=newStr.replaceAll(","," ")
// console.log(`String:`);
// console.log(newStr);

// 13.

// let devices = ['keyboard', 'mouse', 'printer', 'monitor'];
// let out;
// document.write(`Devices: <br/> ${devices} <br/>`)
// out=devices.shift()
// document.write(`Out: <br/> ${out} <br/>`)
// out=devices.shift()
// document.write(`Out: <br/> ${out} <br/>`)
// out=devices.shift()
// document.write(`Out: <br/> ${out} <br/>`)
// out=devices.shift()
// document.write(`Out: <br/> ${out} <br/>`)

// 14.

// let devices = ['keyboard', 'mouse', 'printer', 'monitor'];
// let out;
// document.write(`Devices: <br/> ${devices} <br/>`)
// out=devices.pop()
// document.write(`Out: <br/> ${out} <br/>`)
// out=devices.pop()
// document.write(`Out: <br/> ${out} <br/>`)
// out=devices.pop()
// document.write(`Out: <br/> ${out} <br/>`)
// out=devices.pop()
// document.write(`Out: <br/> ${out} <br/>`)

// 15.
// let phoneManufactures=["apple","samsung","motrolla","nokia","sony","haier"]