/* eslint-disable prettier/prettier */
// TODO: Write your function in this file
function fizzBuzz(lower, upper) {
  const answer = []
    for (let i = lower; i <= upper; i++) {
    if (Number.isInteger(i / 3) & Number.isInteger(i / 5)) {
      answer.push('FizzBuzz')
    } else if (Number.isInteger(i / 3)) {
      answer.push('Fizz')
    } else if (Number.isInteger(i / 5)) {
      answer.push('Buzz')
    } else {
      answer.push(i)
    }
  }
  return answer
}
// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
