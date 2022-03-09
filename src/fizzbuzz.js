// TODO: Write your function in this file

const fizzBomb = (lowNum, upperNum) => {
  const arrayNumbers = [];
  const range = upperNum - lowNum;
  const divisorArray = [15, 3, 5];
  const wordReplaceArray = ["FizzBuzz", "Fizz", "Buzz"];
  for (let j = 0; j < range; j++) {
    arrayNumbers.push(lowNum + j);
  }
  arrayNumbers.push(upperNum);

  for (let i = 0; i < divisorArray.length; i++) {
    for (let j = 0; j < arrayNumbers.length; j++) {
      if (arrayNumbers[j] % divisorArray[i] === 0) {
        arrayNumbers.splice(j, 1, wordReplaceArray[i]);
      }
    }
  }

  return arrayNumbers;
};

console.log("Checking....", fizzBomb(17, 93));

module.exports = fizzBomb;
