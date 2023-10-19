// TODO: Write your function in this file

// Write your code below this line
function fizzBuzz(lower, upper) {
    const answer = []
    for (let i = lower; i <= upper; i ++){
        if (i % 3 == 0 && i % 5 == 0) {
            answer.push("FizzBuzz")
        } else if (i % 3 == 0) {
            answer.push("Fizz")
        } else if ( i % 5 == 0) {
            answer.push("Buzz")
        } else {
            answer.push(i)
        }
    }
    return answer
}
//console.log(fizzBuzz(13,15))

// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz