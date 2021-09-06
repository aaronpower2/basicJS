// //adding
// let number = 8
// const two = 2

// number += two

// console.log(number)
// console.log("-----------------")

// //incrementing
// number ++
// console.log(number)
// console.log("-----------------")

// create a random number
function randNum() {
    return Math.floor(Math.random() * 100)
}
console.log(randNum())

//init array
let myArray = [1,2,3,4,5]
let arrayLen = myArray.length

//reverse array items
myArray.reverse()

let i = 0
let arraySum = 0

while (i < arrayLen) {
    arraySum += myArray[i]
    i++
    console.log(arraySum)
}
