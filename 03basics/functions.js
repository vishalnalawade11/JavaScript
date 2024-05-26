// function add(num1, num2) {
//     return (num1 + num2)
// }

// const result = add(2, 10)
// console.log(result);

// function loginUsername(username="sam") {
//     if(!username) {
//         console.log("please enter username");
//     } else {
//     return `${username} just logged in`;
//     }
// }

// console.log(loginUsername())


// Rest & spread operator
// function calculateCartPrice(val1, val2, ...product) {
//     console.log(val1, val2)
//     return product
// }

// console.log(calculateCartPrice(200,100,300,400))

const user = {
    name : "vishal",
    title : "engineer"
}

function objectHandler(object) {
    console.log(`${object.name} is a ${object.title}`)
}

objectHandler({
    name : "pratik",
    title : "engineer"
})

const array = [10,200,300,410,500]

function arrayhandler (array) {
    return array[2]
}

console.log(arrayhandler(array));
