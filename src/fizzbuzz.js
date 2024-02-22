// TODO: Write your function in this file
function fizzBuzz(lowerNumber, upperNumber) {
    const fizzBuzzArr = []
    for (let i = lowerNumber; i <= upperNumber; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            fizzBuzzArr.push('FizzBuzz')
        } else if ( i % 5 === 0) {
            fizzBuzzArr.push('Buzz')
        } else if (i % 3 === 0) {
            fizzBuzzArr.push('Fizz')
        } else {
            fizzBuzzArr.push(i)
        }
    }
    return fizzBuzzArr
}

console.log(fizzBuzz(1, 30))

// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
