// TODO: Write your function in this file
const fbFunc = function (lower,upper) {
    let fbArray = [];
    for (i=lower;i<=upper;i++){
        let output = "";
    if (i%3===0) {output += "Fizz";}
    if (i%5===0) {output += "Buzz";}

    if (output === "") {output=i;}
    fbArray.push(output);
    } return fbArray;
}
// TODO: Change undefined below to the name of your function
module.exports = fbFunc