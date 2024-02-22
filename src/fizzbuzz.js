// TODO: Write your function in this file


function fizzBuzz(lower, upper) {
    let result = []
    for (let i = lower; i <= upper; i++) {
        let ans = '';
        if (i % 3 === 0) ans += 'Fizz';
        if (i % 5 === 0) ans += 'Buzz';
        result.push(ans || i);
    } 
    return result
    }

// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz

