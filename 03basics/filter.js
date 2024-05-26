// const nums = [1,2,3,4,5,6,7,8,9]
// let newNums = nums.filter((num) => num > 4)  //if you use scope{} you have to explicitly write return
// console.log(newNums);

// const newNums = []
// nums.forEach((num) => {
//     if(num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//  let newBook = books.filter((book) => book.publish > 1900)
//     console.log(newBook);

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// let nums=myNumbers.map((num) => num + 10)
// console.log(nums);

// let nums = myNumbers.forEach((num) => num+10)
// console.log(nums);

const newNums = myNumbers
                .map((num) => num * 10)
                .map((num) => num + 10)
                .filter((num) => num > 50)

console.log(newNums);