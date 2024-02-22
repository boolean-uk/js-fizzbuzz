// TODO: Write your function in this file

function fizzbuzz(lower, upper){
    

        let i = lower
        fizzyArr = []

        while (i <= upper){
        if (i % 3 === 0 && i % 5 === 0){
            fizzyArr.push('FizzBuzz')
        } else if (i % 3 === 0){
            fizzyArr.push('Fizz')
        } else if (i % 5 === 0){
            fizzyArr.push('Buzz')
        } else {
            fizzyArr.push(i)
        }
        i++
        
    }
    return fizzyArr
}

console.log(fizzbuzz(1, 100))

// TODO: Change undefined below to the name of your function
module.exports = fizzbuzz
