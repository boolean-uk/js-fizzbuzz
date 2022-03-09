// TODO: Write your function in this file

const fizzBuzz = function (lower, upper) {
  const fizzBuzzArr = [];

  for (let i = lower; i <= upper; i++) {
    if (i % 3 === 0 && i % 5 === 0) fizzBuzzArr.push("FizzBuzz");
    else if (i % 3 === 0) fizzBuzzArr.push("Fizz");
    else if (i % 5 === 0) fizzBuzzArr.push("Buzz");
    else {
      fizzBuzzArr.push(i);
    }
  }

  return fizzBuzzArr;
};

// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz;
