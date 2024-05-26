// const tinderUser = new Object()
// const tinderUser1 = {}
// console.log(typeof tinderUser);
// console.log(tinderUser1);

// tinderUser.name = "vishal"
// tinderUser.age = 20
// tinderUser.gender = "male"

// console.log(tinderUser);

// const regularUser = {
//     email : "vishal@",
//     fullname : {
//         fname : "vishal",
//         lname : "nalawade"
//     },
//     pno : 12457
// }

// console.log(regularUser.fullname.fname)

// console.log(Object.keys(tinderUser))
// console.log(tinderUser.hasOwnProperty("name"));

//Object destructuring

const user = {
    name:"vishal",
    email:"vishal@gmail",
    age:22
}

const {name, email, age} = user
console.log(email)