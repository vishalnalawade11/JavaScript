const marvalHeros = ["Ironman", "Thor", "Spiderman"];
const dcHeros = ["Batman", "Superman", "Flash"];

// marvalHeros.push(dcHeros);
// console.log(marvalHeros[3][1]);

// const allHeros = [...marvalHeros, ...dcHeros];
// console.log(allHeros);

// const myarr = [1,2,3,[4,5],6,7,[8,9,[10,11,12]]]
// console.log(myarr.flat(2))

console.log(Array.isArray("Vishal"))
console.log(Array.from("Vishal"))
console.log(Array.from({name :"Vishal"}))  //Interesting

let score1 = 100;
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))