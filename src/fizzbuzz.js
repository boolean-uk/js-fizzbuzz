// TODO: Write your function in this file

const Element = require("./Element");

const fill = (lower, upper) => {
  const arr = [];
  for (let i = lower; i <= upper; i++) {
    const element = new Element(i);
    arr.push(element.output());
  }

  return arr;
};
// TODO: Change undefined below to the name of your function
module.exports = fill;
