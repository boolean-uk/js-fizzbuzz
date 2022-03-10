class Fizzbuzz {
    constructor(lower, upper) {
        this.lower = lower
        this.upper = upper

        console.log("in the constructor");
    }

    outputArray() {
        const array = []
        for (let i = this.lower; i <= this.upper; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                array.push ("FizzBuzz")
        } else if (i % 3 === 0) {
            array.push ("Fizz")
        } else if (i % 5 === 0) {
            array.push ("Buzz")
        } else {
            array.push(i)
        }
    } return array
} 
} 

const fizzbuzz = new Fizzbuzz (1, 150)

console.log(fizzbuzz.outputArray())