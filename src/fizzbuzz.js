// TODO: Write your function in this file

const fizzBomb = (lowNum, upperNum) => {
  const arrayNumbers = [];
  const range = upperNum - lowNum;
  for (let j = 0; j < range; j++) {
    arrayNumbers.push(lowNum + j);
  }
  arrayNumbers.push(upperNum);

  for (let j = 0; j < arrayNumbers.length; j++) {
    console.log(j);
    if (arrayNumbers[j] % 15 === 0) {
      console.log("inside loop");
      arrayNumbers.splice(j, 1, "FizzBuzz");
    }
  }

  for (let j = 0; j < arrayNumbers.length; j++) {
    console.log(j);
    if (arrayNumbers[j] % 3 === 0) {
      console.log("inside loop");
      arrayNumbers.splice(j, 1, "Fizz");
    }
  }

  for (let j = 0; j < arrayNumbers.length; j++) {
    console.log(j);
    if (arrayNumbers[j] % 5 === 0) {
      console.log("inside loop");
      arrayNumbers.splice(j, 1, "Buzz");
    }
  }
  return arrayNumbers;
};

console.log("Checking....", fizzBomb(17, 93));
console.log(fizzBomb);
module.exports = fizzBomb;
