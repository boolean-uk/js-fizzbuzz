// TODO: Write your function in this file
const fill = (lower, upper) => {
  const arr = [];
  for (let i = lower; i <= upper; i++) {
    const three = i % 3 === 0;
    const five = i % 5 === 0;
    if (three && five) arr.push("FizzBuzz");
    else if (three) arr.push("Fizz");
    else if (five) arr.push("Buzz");
    else arr.push(i);
  }

  return arr;
};
// TODO: Change undefined below to the name of your function
module.exports = fill;
