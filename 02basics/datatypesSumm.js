// //  Primitive

// //  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// // const bigNumber = 3456543576654356754n



// // Reference (Non primitive)

// // Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof myObj
// );

// // https://262.ecma-international.org/5.1/#sec-11.4.3

let user1 = "Vishal"
let user2 = "Mohit"
console.log(user1);
console.log(user2);

let person1 = {
    name : "Akash",
    course : "PG-DAC"
}
let person2 = person1

person2.name = "Vishal"

console.log(person1.name);
console.log(person2.name);
