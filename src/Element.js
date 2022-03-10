module.exports = class Element {
  number;

  constructor(number) {
    this.number = number;
  }

  canDivideBy(div) {
    return this.number % div === 0;
  }

  output() {
    const three = this.canDivideBy(3);
    const five = this.canDivideBy(5);
    if (three && five) return "FizzBuzz";
    else if (three) return "Fizz";
    else if (five) return "Buzz";
    return this.number;
  }
};
