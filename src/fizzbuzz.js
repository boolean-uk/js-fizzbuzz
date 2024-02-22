// TODO: Write your function in this file
const isMultipleOfThree=(n)=>n%3===0
const isMultipleOfFive=(n)=>n%5===0

function fizzBuzz(lower, upper) {
    const arr = []
    
    for (let i = lower; i <= upper; i++) {
        let e=""
        
        if(isMultipleOfThree(i)){e+="Fizz"}
        if(isMultipleOfFive(i)){e+="Buzz"}
        if(!e)e=i

        arr.push(e)
    }
debugger
    return arr
}

fizzBuzz(1,3)

// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
