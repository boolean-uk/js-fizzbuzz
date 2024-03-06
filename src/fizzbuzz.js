// TODO: Write your function in this file
function fizzbuzz(num1,num2){
    let newNum = []; 
    for(let i = num1;i <= num2;i++){
        if((i % 3 === 0) && (i % 5 === 0)) {
            newNum.push('FizzBuzz')
          }
        
    else if(i % 5 === 0) { 
         newNum.push('Buzz')
    }
       else if(i % 3 === 0 ) {
        newNum.push('Fizz')
   } else  newNum.push(i)
    }
   
   return  newNum}
    console.log(fizzbuzz(13,15))
// TODO: Change undefined below to the name of your function
module.exports = fizzbuzz
