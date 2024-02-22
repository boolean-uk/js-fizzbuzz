// TODO: Write your function in this file
function fizzBuzz(start = 1, end = 30) {
  const result = []
  for (let i = start; i <= end; i++) {
    if (i % 15 === 0) {
      result.push('FizzBuzz')
    } else if (i % 5 === 0) {
      result.push('Buzz')
    } else if (i % 3 === 0) {
      result.push('Fizz')
    } else {
      result.push(i)
    }
  }
  return result
}
console.log(fizzBuzz(1))

// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
