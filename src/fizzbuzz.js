// TODO: Write your function in this file
const fbFunc = function (lower,upper) {
    let fbArr = []
    let strArr = ["Fizz","Buzz"]
    for (i=lower;i<=upper;i++){
    let output = ""
    const fbifyOutput = (...numArgs) => {
        for (j=0;j<numArgs.length;j++) {
          if (i%numArgs[j]===0) {output += strArr[j]}
        } if (output === "") {output=i;}
        return output
    }
    fbArr.push(fbifyOutput(3,5));
    } return fbArr;
}
// TODO: Change undefined below to the name of your function
module.exports = fbFunc