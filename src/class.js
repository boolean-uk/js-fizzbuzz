// const { __esModule } = require("console");

class FizzBomb {
  constructor(lowNum, upperNum) {
    this.lowNum = lowNum;
    this.upperNum = upperNum;
  }

  populateArray(lowNum, upperNum) {
    const popArray = [];
    for (let j = this.lowNum; j < this.upperNum + 1; j++) {
      popArray.push(j);
    }

    return popArray;
  }
  replaceNum() {
    const arrayToChange = this.populateArray();
    const divisorArray = [15, 3, 5];
    const wordReplaceArray = ["FizzBuzz", "Fizz", "Buzz"];

    for (let i = 0; i < divisorArray.length; i++) {
      for (let j = 0; j < arrayToChange.length; j++) {
        if (arrayToChange[j] % divisorArray[i] === 0) {
          arrayToChange.splice(j, 1, wordReplaceArray[i]);
        }
      }
    }

    return arrayToChange;
  }
}

const fizzBomb = new FizzBomb(17, 78);
console.log(fizzBomb);
const myArray = fizzBomb.replaceNum(); // let this method do all the work for now
// console.log(myArray);

class FizzBombTwo {
  constructor(lowNum, highNum) {
    this.lowNum = lowNum;
    this.highNum = highNum;
  }

  replaceIntegers() {
    let arrayNumbers = [];

    for (let j = this.lowNum; j < this.highNum; j++) {
      if (j % 15 === 0) {
        arrayNumbers.push("FizzBuzz");
      } else if (j % 3 === 0) {
        arrayNumbers.push("Fizz");
      } else if (j % 5 === 0) {
        arrayNumbers.push("Buzz");
      } else {
        arrayNumbers.push(j);
      }
    }
    return arrayNumbers;
  }
}

const fizzBombTwo = new FizzBombTwo(17, 78).replaceIntegers();
// console.log(fizzBombTwo);

module.exports = FizzBomb;
