// write a function that accepts two numbers, lower, upper
// the function should return an array
// within the array it should return the inputs & lower/upper
// if the number is a multiple of 3 (e.g 3, 6, 9, 12 etc), the array should contain a string that reads 'Fizz'
// if the number is a multiple of 5 (e.g 5, 10, 20 etc), the array should contain a string tht reads 'Buzz'
// if any numbers are multiples of both 3 & 5, the array should contain a string that reads 'FizzBuzz'

// function fizzBuzz(lower, upper)
// Input: number
// Condition: if the number is a multiple of 3 || if number is a multiple of 5 || if number is multiple of 3, 5
// Output: ['Fizz'] || ['Buzz'] || ['FizzBuzz']

// TODO: Write your function in this file

function fizzBuzz(lower, upper) {
  const result = [lower, upper]
  for (let i = lower; i <= upper; i++) {
    if (multipleOf3([i])) {
      return result
    } else if (multipleOf5([i])) {
      return result
    } else if (multipleOf35([i])) {
      return result
    }
  }
  return result
}

function multipleOf3(num) {
  let result = []
  for (let i = 0; i <= num; i++) {
    if (num[i] / 3 === 0) {
      result = 'Fizz'
    }
  }
  return result
}
function multipleOf5(num) {
  let result = []
  for (let i = 0; i <= num; i++) {
    if (num[i] / 5 === 0) {
      result = 'Buzz'
    }
  }
  return result
}

function multipleOf35(num) {
  let result = []
  for (let i = 0; i <= num; i++) {
    if (num[i] / 3 === 0 && num[i] / 5 === 0) {
      result = 'FizzBuzz'
    }
  }
  return result
}
// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
