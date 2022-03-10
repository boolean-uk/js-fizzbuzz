// TODO: Write your function in this file

class FizzBuzz {
  constructor(lower, upper) {
    this.lower = lower;
    this.upper = upper;
    this.answerArr = [];
  }

  createFizzBuzz() {
    for (let i = this.lower; i <= this.upper; i++) {
      if (i % 15 === 0) {
        this.answerArr.push("FizzBuzz");
      } else if (i % 3 === 0) {
        this.answerArr.push("Fizz");
      } else if (i % 5 === 0) {
        this.answerArr.push("Buzz");
      } else {
        this.answerArr.push(i);
      }
    }
    return this.answerArr;
  }
}
// TODO: Change undefined below to the name of your function
module.exports = FizzBuzz;
