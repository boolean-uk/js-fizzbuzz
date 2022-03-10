class FizzBuzz {
    constructor (lower, upper) {
        this.lower = lower
        this.upper = upper
    }

    checkNumber() {
        let array = [];
        for (let i = this.lower; i <= this.upper; i++) {
           if (i % 3 === 0 && i % 5 === 0) {
               array.push("FIzzBuzz")
           } 
           else if (i % 3 === 0) {
               array.push("Fizz")
           }
           else if (i % 5 === 0) {
               array.push("Buzz")
           }
           else {
               array.push(i)
           }
        }
        return array;
    }
}

const test1 = new FizzBuzz(1, 50)
// const test2 = new FizzBuzz(51, 54)
// const test3 = new FizzBuzz(1, 3)
// const test4 = new FizzBuzz(9, 12)
// const test5 = new FizzBuzz(4, 6)
// const test6 = new FizzBuzz(13, 15)

console.log(test1.checkNumber());
