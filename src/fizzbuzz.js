// TODO: Write your function in this file
function fizzBuzz(lower, upper) {
  const array = []
// TODO: Change undefined below to the name of your function
  for (let i = lower; i <= upper; i++){
    if (i % 3 === 0 && i % 5 === 0) {
      array.push("FizzBuzz")
    }
    else if (i % 3 === 0){
      array.push("Fizz")
    }
    else if (i % 5 === 0){
      array.push("Buzz")
    }
    else {
      array.push(i)
    }
  }
return array 
console.log(array)}

// Example usage:
module.exports = undefined // i expored this because it was failing giving me an error that fizzBuzz is not defined.
module.exports = fizzBuzz
const lowerValue = 1
const upperValue = 15
const output = fizzBuzz(lowerValue, upperValue)
console.log(output)