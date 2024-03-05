// write a function that accepts two numbers, lower, upper
// the function should return an array
// within the array it should return the inputs & lower/upper
// if the number is a multiple of 3 (e.g 3, 6, 9, 12 etc), the array should contain a string that reads 'Fizz'
// if the number is a multiple of 5 (e.g 5, 10, 20 etc), the array should contain a string tht reads 'Buzz'
// if any numbers are multiples of both 3 & 5, the array should contain a string that reads 'FizzBuzz'

// function fizzBuzz(lower, upper)
// Input: number
// Condition: if the number is a multiple of 3 || if number is a multiple of 5 || if number is multiple of 3 && 5
// Output: ['Fizz'] || ['Buzz'] || ['FizzBuzz']

// TODO: Write your function in this file

function fizzBuzz(lower, upper) {
  const result = []
  for (let i = lower; i <= upper; i++) {
    result.push(i)
  }
  const newArr = []
  for (let i = 0; i < result.length; i++) {
    if (result[i] % 3 !== 0 && result[i] % 5 !== 0) {
      newArr.push(result[i])
    } else if (result[i] % 3 === 0 && result[i] % 5 === 0) {
      newArr.push('FizzBuzz')
    } else if (result[i] % 5 === 0) {
      newArr.push('Buzz')
    } else if (result[i] % 3 === 0) {
      newArr.push('Fizz')
    }
  }
  return newArr
}

console.log(fizzBuzz(13, 15))

// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
