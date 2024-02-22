// TODO: Write your function in this file

function fizzbuzz(num1,num2) {
  let middleArray = []

  for(let i = num1; i <= num2; i++){
    console.log(`loop : ${i}`)

    if(i % 15 == 0) {
      middleArray.push('FizzBuzz')
      console.log(`number 15 : ${i}`)
    } else if(i % 3 === 0){
        middleArray.push('Fizz')
        console.log(`number 3 : ${i}`)

    } else if(i % 5 === 0) {
      middleArray.push('Buzz')
      console.log(`number 5 : ${i}`)

    }else {
      middleArray.push(i)
      console.log(`non : ${i}`)

    }
  }
  console.log(middleArray)

  return middleArray
}

fizzbuzz(13,15)
// TODO: Change undefined below to the name of your function
module.exports = fizzbuzz
