// TODO: Write your function in this file
function fizzbuzz(lower, upper) {
  const numArray = []
  for (let i = lower; i <= upper; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      numArray.push('FizzBuzz')
    } else if (i % 3 === 0) {
      numArray.push('Fizz')
    } else if (i % 5 === 0) {
      numArray.push('Buzz')
    } else {
      numArray.push(i)
    }
  }

  return numArray
}

console.log(fizzbuzz(0, 15))

// Fizz for divisible by 3
// Buzz for divisible by 5
// FizzBuzz for both
// TODO: Change undefined below to the name of your function
module.exports = fizzbuzz
