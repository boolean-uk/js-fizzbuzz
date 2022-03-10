class FizzBuzz {
  constructor(lower, upper) {
    this.lower = lower;
    this.upper = upper;

  }

    createArray() {
    // console.log(this)
        let array = [];
        for (let i = this.lower; i <= this.upper; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                array.push("FizzBuzz")
            }
            else if (i % 3 === 0) {
                array.push("Fizz")
            }
            else if (i % 5 === 0) {
                array.push("Buzz")
            }
            else {
                array.push(i);
            }
        }
    return array
    }
}
    
// instance of a class
const fizzBuzz = new FizzBuzz(1, 7888888888888888) // initial state
const array = fizzBuzz.createArray()
console.log(array)