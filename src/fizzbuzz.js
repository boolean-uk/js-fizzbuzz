// TODO: Write your function in this file
function fizzBuzz(lower, upper) {
  const array = []

  for (let i = lower; i <= upper; i++) {
    const isDivisableBy3 = i % 3 === 0
    const isDivisableBy5 = i % 5 === 0

    if (isDivisableBy3 && isDivisableBy5) {
      array.push('FizzBuzz')
      continue
    }

    if (isDivisableBy5) {
      array.push('Buzz')
      continue
    }

    if (isDivisableBy3) {
      array.push('Fizz')
      continue
    }
    array.push(i)
  }

  return array
}

console.log(fizzBuzz(1, 30))
// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
