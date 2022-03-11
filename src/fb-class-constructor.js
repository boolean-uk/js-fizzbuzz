class FizzBuzz {
  constructor(lower, upper) {
    this.lower = lower;
    this.upper = upper;
  }
  play() {
    const result = [];
    for (let i = this.lower; i <= this.upper; i++) {
      if (this.isDivisibleBy(i, 15)) {
        result.push("fizzBuzz");
      } else if (this.isDivisibleBy(i, 5)) {
        result.push("buzz");
      } else if (this.isDivisibleBy(i, 3)) {
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
