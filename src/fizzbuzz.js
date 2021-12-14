// TODO: Write your function in this file

"use strict";

// The function should return an array containing all the numbers from lower to upper, including lower and upper themselves
// - with the following exceptions:

function fizzBuzz(lower, upper) {
  //array of lower to upper (inclusive)
  const array = Array(upper - lower + 1)
    .fill()
    .map((_, idx) => lower + idx);
  //set input variables
  const val1 = 3;
  const val2 = 5;
  //set output variables
  const strOne = "Fizz";
  const strTwo = "Buzz";
  const strThree = "FizzBuzz";
  //replace elements with string
  for (let i = 0; i < array.length; i++) {
    if (array[i] % val1 === 0 && array[i] % val2 !== 0 && array[i] !== 0)
      array[i] = strOne;
    if (array[i] % val2 === 0 && array[i] % val1 !== 0 && array[i] !== 0)
      array[i] = strTwo;
    if (array[i] % (val1 * val2) === 0 && array[i] > 0) array[i] = strThree;
  }
  return array;
}

// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz;
