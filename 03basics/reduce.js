// const myArr = [1, 2, 3, 4]

// let result = myArr.reduce(function(acc, curr) {
//     console.log(`acc: ${acc}, curr: ${curr}`);
//     return acc + curr
// }, 0)

// console.log(result);

const course = [
    {
        name : "Java",
        price : 2000
    },
    {
        name : "Python",
        price : 4000
    },
    {
        name : "DSA",
        price : 9000
    }
]

let storage = course.reduce((acc, item) => (acc + item.price), 0)
console.log(storage);