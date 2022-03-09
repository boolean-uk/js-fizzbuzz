// TODO: Write your function in this file
function createFizzBuzz (lower, upper) {
    const outputArray = []
    for (let i = lower; i <= upper; i++) {
        outputArray.push(i)

        if (lower % 3) {
            return ("Fizz")
        } else if (lower % 5) {
            return ("Buzz")
        } else (lower % 3 && lower % 5) {
            return ("FizzBuzz")
        }
    } return outputArray;
}


// Function containing lower and upper should give us an array
// Inside this array there should be:
// 1. A string "Fizz" if a number is a multiple of 3 (3, 6, 9, 12 etc...)
// 2. A string "Buzz" if a number is a multiple of 5 (5, 10, 15 etc...)
// 3. A string "FizzBuzz" if a number can be multipled by both 3 and 5 (15, 30, etc...)

// This means you'll need to use a for loop, a .push to include the results in your array, conditional flow and boolean (true or false).

// TODO: Change undefined below to the name of your function
module.exports = createFizzBuzz
