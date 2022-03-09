// TODO: Write your function in this file
function fizzBuzz(lower, upper) {
    const array = []
    for (let i = lower; i <= upper; i ++) {
        if (i % 15 == 0) {
        array.push ("FizzBuzz") }
         else if (i % 3 ==  0) {
             array.push ("Fizz")
        }
        else if (i % 5 == 0) { 
            
         array.push ("Buzz")
        }   
         else array.push(i)
    
     }
     return array
     }
  
    console.log (fizzBuzz(1,100))
// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
