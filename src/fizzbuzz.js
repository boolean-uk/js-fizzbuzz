function fizzBuzz(lower, upper) {
  let i = lower
  buzzArr = []
  while (i <= upper) {
    if (i % 3 === 0 && i % 5 === 0) {
      buzzArr.push('FizzBuzz')
    } else if (i % 3 === 0) {
      buzzArr.push('Fizz')
    } else if (i % 5 === 0) {
      buzzArr.push('Buzz')
    } else {
      buzzArr.push(i)
    }
    i++
  }
  return buzzArr
}

console.log(fizzBuzz(1, 90))

module.exports = fizzBuzz
