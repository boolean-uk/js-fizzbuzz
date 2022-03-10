class FizzBuzz {
  constructor() {}

  calcFizzBuzz(lower, upper) {
    const Array = [];

    for (let i = lower; i <= upper; i++) {
      if (i % 15 === 0) Array.push("FizzBuzz");
      else if (i % 3 === 0) Array.push("Fizz");
      else if (i % 5 === 0) Array.push("Buzz");
      else {
        Array.push(i);
      }
    }
    return Array;
  }
}

// const fizzBuzz1 = new FizzBuzz();
// console.log(fizzBuzz1.calcResult(1, 15));

// ------------------- other way to write it --------------------
// class FizzBuzz2 {
//   constructor(lower, upper) {
//     this.lower = lower;
//     this.upper = upper;
//   }

//   calcFizzBuzz() {
//     const Array = [];

//     for (let i = this.lower; i <= this.upper; i++) {
//       if (i % 15 === 0) Array.push("FizzBuzz");
//       else if (i % 3 === 0) Array.push("Fizz");
//       else if (i % 5 === 0) Array.push("Buzz");
//       else {
//         Array.push(i);
//       }
//     }
//     return Array;
//   }
// }

// const fizzBuzz2 = new FizzBuzz2(1, 15);
// console.log(fizzBuzz2.calcFizzBuzz());

module.exports = FizzBuzz;
