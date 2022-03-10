// TODO: Write your function in this file

const fizzBuzz = function (lower, upper) {
  const numberArray = [];
  for (let i = lower; i <= upper; i++) {
    if (i % 15 === 0) {
      numberArray.push("FizzBuzz");
    } else if (i % 3 === 0) {
      numberArray.push("Fizz");
    } else if (i % 5 === 0) {
      numberArray.push("Buzz");
    } else {
      numberArray.push(i);
    }
  }
  return numberArray;
};

// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz;
