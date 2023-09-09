// TODO: Write your function in this file
//! FIZZ BUZZ

// ? My Plan
// 1. I'm gonna create a function called fizzbuzz
// 2. The function will take 2 parameters, a starting number, and an ending number
// 3. Both starting number and ending number are to be included in the problem
// 4. I will need to create a loop so that i can iterate through the range of number
// 5. Inside of the loop, i will check if the current number is divisible by 3, 5, or both.
// 6. If the number is divisble by 3 or 5 or both, i will use th Modulo operator (%)
//* 7. The % operator divides the first number by the second number and returns the reminder
// If the reminder is not 0 for the given number (i. e. 3 or 5) then it's not divisible by that number
// e.g. 5 % 3 ==> 2, so 5 is not divible by 3
// e.g. 6 % 3 ==> 0, so 6 is divible by 3
// Othervise, I will print out the number

//! =================== LET's Start============================//!

function fizzbuzz(startNum, endNum) {
  // Guard clause to prevent against wrong use of my function
  // Prevent of mulfunctions
  if (startNum > endNum) {
    console.log('StartNumber should be GREATER than the EndNumber!')
  }
  for (let i = startNum; i <= endNum; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 == 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
}

fizzbuzz(0, 100)

// TODO: Change undefined below to the name of your function
module.exports = fizzbuzz
