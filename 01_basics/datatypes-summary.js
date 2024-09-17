// Primitive

// 7 Types : String , Number, Boolean, null , undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outSideTemp = null
let userEmail

 let id = Symbol('123')
 let anotherId = Symbol('123')

//  console.log(id === anotherId);

//  const bigNumber = 4567654328765432n
 

// Reference (Non Primitive)

// Array , Objects , Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name : "Pawan",
    age : 23,
}

const myFunction = function(){
    console.log("Hello World!");    
}

console.log(typeof heros);
