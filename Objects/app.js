// OBJECTS

// 01.

// var itemsArray = [
//   { name: "juice", price: "50", quantity: "3" },
//   { name: "cookie", price: "30", quantity: "9" },
//   { name: "shirt", price: "880", quantity: "1" },
//   { name: "pen", price: "100", quantity: "2" },
// ];

// let totalAllItems = 0;
// for (let item of itemsArray) {
//   let itemTotal = item.price * item.quantity;
//   console.log(`${item.name} Total Price = ${itemTotal}`);
//   totalAllItems += itemTotal;
// }
// console.log(`Total Price of All Items = ${totalAllItems}`);

// 02.

let info = {
  firstName: "Hafsa",
  lastName: "Imran",
  email: "hafsaemran1712@gmail.com",
  password: "12345",
  age: 16,
  gender: "Female",
  city: "Karachi",
  country: "Pakistan",
};

if (info.age && info.country) {
  console.log("Age and Country property exist in object");
} else {
  console.log("Age and Country property are not exist in object");
}

console.log("firstName" in info, "First name exist in info");

console.log("lastName" in info, "Last name exist in info");
