// CHAPTER 14-16

// Question no 01
// let studentNames = [];

// Question no 02
// let obj = {}

// Question no 03
// let fruits = ["apple", "mango", "Banana"];

// Question no 04
// let num = [1, 2, 3, 4];

// Question no 05
// let boolean = [true, false];

// Question no 06
// let mixedArrays = ["apple", 3, false, null, undefined];

// Question no 07
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

// Question no 08
// let studentNames = ["Ayesha", "Abdullah", "Usman"];
// let score = [320, 230, 480];
// let totalMarks = 500;
// document.write(`Score of ${studentNames[0]} is ${score[0]}. Percentage is ${score[0] / totalMarks * 100}% <br/>`)
// document.write(`Score of ${studentNames[1]} is ${score[1]}. Percentage is ${score[1] / totalMarks * 100}% <br/>`)
// document.write(`Score of ${studentNames[2]} is ${score[2]}. Percentage is ${score[2] / totalMarks * 100}% <br/>`)

// Question no 09

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

// c,d,e
// document.write(color)
// color.unshift("yellow","brown")
// color.shift()
// color.pop()
// color.push("grey")
// document.write(`<br/>After adding your color: ${color}`)

//  f,g pending  //

// Question no 10
// let studentScores = [320, 230, 480, 120];
// document.write(studentScores)
// document.write("<br/>")
// studentScores.sort();
// document.write(`Order score of students ${studentScores}`);

// Question no 11
// document.write(`Cities list: <br/>`);
// let cities = ["Karachi", "lahore", "peshawar", "gilgit", "islamabad"];
// document.write(cities);
// document.write(`<br/>`);
// document.write(`Selected Cities list: <br/>`);
// let newCities = cities.slice(2,4);
// document.write(newCities);