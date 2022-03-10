// TODO: Write your function in this file

const fizzBombArr = function (lower, upper) {
  const fizzBuzzArr = [];

  for (let i = lower; i <= upper; i++) {
    if (i % 15 === 0) fizzBuzzArr.push("FizzBuzz");
    else if (i % 3 === 0) fizzBuzzArr.push("Fizz");
    else if (i % 5 === 0) fizzBuzzArr.push("Buzz");
    else {
      fizzBuzzArr.push(i);
    }
  }

  return fizzBuzzArr;
};

module.exports = fizzBombArr;
