// Dates

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let createDate = new Date(2024, 5, 23, 5, 3)

let createDate = new Date("2024-01-12")
// console.log(createDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(createDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let onlyDate = new Date()
console.log(onlyDate);
console.log(onlyDate.getMonth() + 1);
console.log(onlyDate.getDay());
