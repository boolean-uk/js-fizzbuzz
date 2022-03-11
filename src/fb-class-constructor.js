class FizzBuzz {
  constructor(lower, upper) {
    this.lower = lower;
    this.upper = upper;
  }
  play() {
    const result = [];
    for (let i = this.lower; i <= this.upper; i++) {
      if (i % 15 === 0) {
        result.push("fizzBuzz");
      } else if (i % 5 === 0) {
        result.push("buzz");
      } else if (i % 3 === 0) {
        result.push("fizz");
      } else {
        result.push(i);
      }
    }
    return result;
  }
  isDivisibleBy(num, divisor) {
    return num % divisor === 0;
  }
}

const fizzBuzz = new FizzBuzz(1, 15);
console.log(fizzBuzz.play());
