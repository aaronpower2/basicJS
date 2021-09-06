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
    return Math.ceil(Math.random() * 100)
}

// take an array and set its length and contents
function fill(thisArray) {
    // set the length of the array to a random number between 1 and 100
    thisArray.length = randNum()
    
    //fill this array with random numbers between 1 and 100
    let i = 0
    while (i < thisArray.length) {
        thisArray[i] = randNum()
        i ++
    }
    return thisArray
}

//calc sum of array contents
function arraySum(thisArray) {

    let i = 0
    let sum = 0
    while (i < thisArray.length) {
        // console.log(thisArray[i])
        sum += thisArray[i]
        i++
    }
    return sum

}

//init array
let myArray = []

//populate myArray
fill(myArray)
//check content
console.log(myArray)

//sort the content highest to lowest
myArray.sort(function(a,b){return b-a})
console.log(myArray)

//sum the contents
let total = arraySum(myArray)
console.log(total)

