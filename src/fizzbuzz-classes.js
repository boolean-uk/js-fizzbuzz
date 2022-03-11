class Fizzbuzz {
    constructor(lower, upper) {
        this.lower = lower
        this.upper = upper
    }

    play() {
        const outputArray = []
        for (let i = this.lower; i <= this.upper; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
             outputArray.push ("FizzBuzz")
        } else if (i % 3 === 0) {
            outputArray.push ("Fizz")
        } else if (i % 5 === 0) {
            outputArray.push ("Buzz")
        } else {
            outputArray.push(i)
        }
    } return outputArray
} 
} 

const fizzbuzz = new Fizzbuzz (1, 150)

console.log(fizzbuzz.play())