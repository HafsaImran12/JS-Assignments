// ASSIGNMENT 31-34

// // 01.

// let now = new Date()
// document.write(`${now} <br/>`);

// // 02.

// let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
// let month = new Date();
// let currentMonth = month.getMonth();
// document.write(`Current month: ${months[currentMonth]} <br/>`);

// // 03.

// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let day = new Date();
// let currentDay = day.getDay();
// document.write(`Today is ${days[currentDay].slice(0,3)}`);

// // 04.

// let day = new Date()
// let currentDay = day.getDay();

// if (currentDay == 0) {
//     document.write("It's fun day")
// } else if (currentDay == 1) {
//     document.write("Monday")
// } else if (currentDay == 2) {
//     document.write("Tuesday")
// } else if (currentDay == 3) {
//     document.write("Wednesday")
// } else if (currentDay == 4) {
//     document.write("Thursday")
// } else if (currentDay == 5) {
//     document.write("Friday")
// } else if (currentDay == 6) {
//     document.write("It's fun day")
// }

// // 05.

// let day = new Date()
// let currentDay = day.getDate();
// if (currentDay < 15) {
//     document.write(`First fifteen days of the month`)
// } else {
//     document.write(`last days of the month`)
// }

// // 06.

// let now = new Date();
// document.write(`Current Date: ${now} <br/> <br/>`);
// let currentTime = now.getTime();
// document.write(`Elapsed milliseconds since January 1, 1970: ${currentTime} <br/> <br/>`);
// let elapsedMinutes = Math.floor(currentTime / (1000 * 60));
// document.write(`Elapsed minutes since January 1, 1970: ${elapsedMinutes}`);

// // 07.

// let now = new Date();
// let hour = now.getHours();
// if (hour < 12) {
//     document.write("Its AM")
// } else {
//     document.write("Its PM")
// }

// // 08.

// let later = new Date("31 dec 2020")
// document.write(`Later Date: ${later}`)

// // 09.

// let lastRamzan = new Date("08 june 2015")
// let thisRamzan = new Date("February 18, 2026")
// let result = thisRamzan - lastRamzan
// let days = Math.floor(result / (1000 * 60 * 60 * 24))
// document.write(`${days} days have passed since 1st ramzan, 2015`)

// // 10.

// let referenceDate = new Date("December 5, 2015");
// let start2015 = new Date("January 1, 2015");

// let diffMilliseconds = referenceDate - start2015;
// let diffSeconds = diffMilliseconds / 1000;

// document.write(`Reference Date: ${referenceDate} <br>`);
// document.write(`Seconds has passed since beginning of 2015: ${diffSeconds}`);

// // 11.

// let now = new Date()
// document.write(`${now}, <br/>`)
// let hourAgo = new Date(now.getTime() - (60 * 60 * 1000))
// document.write(`1 hour ago ${hourAgo}`)

// // 12.

// let now = new Date();
// document.write(`Current Date: ${now} <br/>`);
// let years = new Date(now);
// years.setFullYear(years.getFullYear() - 100);
// document.write(`100 years back, it was ${years}`);

// // 13.

// let now = new Date();
// let currentYear = now.getFullYear();
// let birthYear = Number(prompt("Enter your birth date"));
// let age = currentYear - birthYear;
// document.write(`Your Age is: ${age} years old`);

// // 14.

// function bill(
//   customerName,
//   currentMonth,
//   numberOfUnits,
//   chargesPerUnit,
//   latePaymentSurcharge
// ) {
//   this.name = customerName;
//   this.month = currentMonth;
//   this.numberOfUnits = numberOfUnits;
//   this.chargesPerUnit = chargesPerUnit;
//   this.latePaymentSurcharge = latePaymentSurcharge;
// }

// let customer1 = new bill("Hafsa", "June", 234, 16, 350);

// console.table(customer1);

// let netAmountPayable =
//   customer1.numberOfUnits * customer1.chargesPerUnit;

// let grossAmountPayable =
//   netAmountPayable + customer1.latePaymentSurcharge;

// console.log("Net Amount:", netAmountPayable);
// console.log("Gross Amount:", grossAmountPayable);

// -----------------------------------------------------

// let customerName = "Hafsa Imran";
// let currentMonth = "June";
// let numberOfUnits = 234;
// let chargesPerUnit = 16.50;
// let latePaymentSurcharge = 350;

// let netAmountPayable = numberOfUnits * chargesPerUnit;
// let grossAmountPayable = netAmountPayable + latePaymentSurcharge;

// document.write(`<h2>K-Electric Bill</h2>`);

// document.write(`Customer Name: <b>${customerName}</b><br><br>`);
// document.write(`Current Month: <b>${currentMonth}</b><br><br>`);
// document.write(`Number of Units: <b>${numberOfUnits}</b><br><br>`);
// document.write(`Charges per Unit: <b>${chargesPerUnit.toFixed(2)}</b><br><br>`);
// document.write(`Net Amount Payable (within Due Date): <b>${netAmountPayable.toFixed(2)}</b><br><br>`);
// document.write(`Late Payment Surcharge: <b>${latePaymentSurcharge.toFixed(2)}</b><br><br>`);
// document.write(`Gross Amount Payable (after Due Date): <b>${grossAmountPayable.toFixed(2)}</b>`);