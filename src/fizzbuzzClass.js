class Fizzbuzz {
    constructor(lower, upper) {
        this.lower = lower;
        this.upper = upper;
    }

    generateResult() {
        const FBArr = [];
        for (let i = this.lower; i <= this.upper; i++) {
            if ((i % 3 === 0) && (i % 5 === 0)) {
                FBArr.push('FizzBuzz');
            }
            else if (i % 3 === 0) {
                FBArr.push('Fizz');
            }
            else if (i % 5 === 0) {
                FBArr.push('Buzz');
            }
            else {
                FBArr.push(i);
            }
        }
    return FBArr;
    }
}

// Instantiate with same arguments used to test the fizzbuzz function
const fizzbuzz = new Fizzbuzz(1, 2);
const fizzbuzz2 = new Fizzbuzz(51, 54);
const fizzbuzz3 = new Fizzbuzz(1, 3);
const fizzbuzz4 = new Fizzbuzz(9, 12);
const fizzbuzz5 = new Fizzbuzz(4, 6);
const fizzbuzz6 = new Fizzbuzz(13, 15);

// Display the returned arrays to compare to the expected results
console.log(fizzbuzz.generateResult());
console.log(fizzbuzz2.generateResult());
console.log(fizzbuzz3.generateResult());
console.log(fizzbuzz4.generateResult());
console.log(fizzbuzz5.generateResult());
console.log(fizzbuzz6.generateResult());