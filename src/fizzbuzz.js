// TODO: Write your function in this file

function buzzFizz(startNum, endNum) {
  let arr = [];
  for (i = startNum; i <= endNum; i++) {
    if (i == 0) {
      arr.push(i);
    } else if (i % 15 == 0) {
      arr.push("FizzBuzz");
    } else if (i % 5 == 0) {
      arr.push("Buzz");
    } else if (i % 3 == 0) {
      arr.push("Fizz");
    } else {
      arr.push(i);
    }
  }
  return arr;
}

// TODO: Change undefined below to the name of your function
module.exports = buzzFizz;
