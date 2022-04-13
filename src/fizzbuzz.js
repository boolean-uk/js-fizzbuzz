// TODO: Write your function in this file

function fizzbuzz(lower, upper) {
    const FBArr = [];
    for (let i = lower; i <= upper; i++) {
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


// TODO: Change undefined below to the name of your function
module.exports = fizzbuzz
