// const user = {
//     username : "vishal",
//     price : 999,
//     welcomemsg : function() {
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }
// }
// user.welcomemsg()
// user.name="sam"
// user.welcomemsg()
// console.log(this);

// function chai() {
//     console.log(this);
// }

// chai()

// const chai = function() {
//     console.log(this);
// }

// chai()

// const chai = () => {
//     console.log(this);
// }
// chai()

const addTwo = (num1, num2) => (num1+num2) //implicit return 
console.log(addTwo(10,20));

const obj = () => ({user : "vishal"})  //objects should be written in parenthesis to return implicitly
console.log(obj());
