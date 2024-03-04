// TODO: Write your function in this file
function fizzBuzz(lower, upper) {
  const array = []
  for (let a = lower; a < upper + 1; a++) {
    if (a % 3 === 0 && a % 5 === 0) {
      array.push('FizzBuzz')
    } else if (a % 5 === 0) {
      array.push('Buzz')
    } else if (a % 3 === 0) {
      array.push('Fizz')
    } else array.push(a)
  }
  return array
}
const fBuzz = fizzBuzz(1, 300)
console.log(fBuzz)

// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
