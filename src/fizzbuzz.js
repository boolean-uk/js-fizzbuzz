// TODO: Write your function in this file

function fizzbuzz(lower, upper){
  const answer = []
  let value
  for (let i = lower; i <= upper; i++) {
    value = i
    if (i % 3 === 0) {
      value = 'Fizz'
      console.log(value)
    }
    if (i % 5 === 0) {
      value = 'Buzz'
      console.log(value)
    }
    if (i % 3 === 0 && i % 5 === 0) {
      value = 'FizzBuzz'
      console.log(value)
    }
    answer[i - lower] = value
  }
  return answer
}
// TODO: Change undefined below to the name of your function
module.exports = fizzbuzz
