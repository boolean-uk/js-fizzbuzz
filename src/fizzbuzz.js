// TODO: Write your function in this file
//Inside the `src/fizzbuzz.js` file write a function that accepts 2 numbers, `lower` and `upper`. 

//The function should return an `array` containing all the numbers from `lower` to `upper`, including `lower` and `upper` themselves - with the following exceptions:

//* Where a number is a multiple of three (3, 6, 9, etc.) 
//the array should contain the string `Fizz` instead of the number. 
//* Where a number is a multiple of five (5, 10, etc.) 
//the array should contain `Buzz` instead of of the number. 
//* For numbers which are multiples of both three and five (15, 30, etc.) the array should contain the string `FizzBuzz` instead of the number.

// function that has inputs lower upper
// for loop that generates an array lower to upper including lower and upper
// if functions for %3=0, %5=0 and %3 && %5 =0
// remove the number form array
// replace the multiples of 3, 5 and 3&&5 with the string and remove the number
// return into array

function fizzBuzz (lower, upper){
    let array = [];
    for (let i = lower; i <= upper; i++){
        if (i % 3 === 0 && i % 5 === 0){
            array.push("FizzBuzz")
        }
        else if (i % 3 === 0){
            array.push("Fizz")
        }
        else if (i % 5 === 0){
            array.push("Buzz")
        }
        else {
            array.push(i);
        }
    }
    return array
    console.log(array)
}

// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
