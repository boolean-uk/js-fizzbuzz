// TODO: Write your function in this file

// TODO: Change undefined below to the name of your function
function fizzBuzzArray(lower, upper) {
  const result = []
  for (let i = lower; i <= upper; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz")
    } else if (i % 3 === 0) {
      result.push("Fizz")
    } else if (i % 5 === 0) {
      result.push("Buzz")
    } else {
      result.push(i)
    }
  }
  return result
}

// Example usage:
const lower = 1
const upper = 15
const resultArray = fizzBuzzArray(lower, upper)
console.log(resultArray)

module.exports = undefined
