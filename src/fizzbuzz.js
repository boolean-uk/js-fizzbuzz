// TODO: Write your function in this file

function fizzbuzz (lower, upper) {
    let array = [];

    for (i = lower; i <= upper; i++){
        if (i % 3 === 0 && i % 5 === 0){
            array.push("FizzBuzz")
        }
        else if (i % 3 === 0){
            array.push("Fizz")
        }
        else if (i % 5 === 0){
            array.push("Buzz")
        }
        else {
            array.push(i)
        }    
    }
    return array
}




// TODO: Change undefined below to the name of your function
module.exports = fizzbuzz
