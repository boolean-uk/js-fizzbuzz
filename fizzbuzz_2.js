function fizzBuzz(lower, upper) {
  const result = []
  for (let i = lower; i <= upper; i++) {
    result.push(i)
  }
  const newArr = []
  for (let i = 0; i < result.length; i++) {
    if (result[i] % 5 === 0) {
      newArr.push('Buzz')
    }
    if (result[i] % 3 === 0) {
      newArr.push('Fizz')
    }
    if (result[i] % 3 === 0 && result[i] % 5 === 0) {
      newArr.push('FizzBuzz')
    } else if (result[i] % 3 !== 0 && result[i] % 5 !== 0) {
      newArr.push(result[i])
    }
  }
  return newArr
}

console.log(fizzBuzz(9, 12))

// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
