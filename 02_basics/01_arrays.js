// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "Naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2[0])

// Arrays Methods

// myarr.push(6)
// myarr.push(7, 8, 9)
// myarr.pop()

// myarr.unshift(8)
// myarr.shift()

// console.log(myarr.includes(9))
// console.log(myarr.indexOf(3))

// const newArr =  myarr.join()

// console.log(myarr);
// console.log(newArr);

// slice and splice

console.log("A", myArr)

const myn1 = myArr.slice(1, 3)

console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1, 3)
console.log("C", myArr)
console.log(myn2)
