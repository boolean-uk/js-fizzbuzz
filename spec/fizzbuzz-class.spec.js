const FizzBuzz = require("../src/fizzbuzz-class.js");
const fizzBuzz1 = new FizzBuzz(1, 2);
const fizzBuzz2 = new FizzBuzz(51, 54);
const fizzBuzz3 = new FizzBuzz(1, 3);
const fizzBuzz4 = new FizzBuzz(9, 12);
const fizzBuzz5 = new FizzBuzz(4, 6);
const fizzBuzz6 = new FizzBuzz(13, 15);

describe("FizzBuzz", () => {
  it("returns [1, 2] for (1, 2)", () => {
    expect(fizzBuzz1.createFizzBuzz()).toEqual([1, 2]);
  });

  it("returns ['Fizz', 52, 53, 'Fizz'] for (51, 54)", () => {
    expect(fizzBuzz2.createFizzBuzz()).toEqual(["Fizz", 52, 53, "Fizz"]);
  });

  it("returns [1, 2, 'Fizz'] for (1, 3)", () => {
    expect(fizzBuzz3.createFizzBuzz()).toEqual([1, 2, "Fizz"]);
  });

  it("returns ['Fizz', 'Buzz', 11, 'Fizz'] for (9, 12)", () => {
    expect(fizzBuzz4.createFizzBuzz()).toEqual(["Fizz", "Buzz", 11, "Fizz"]);
  });

  it("returns [4, 'Buzz', 'Fizz'] for (4, 6)", () => {
    expect(fizzBuzz5.createFizzBuzz()).toEqual([4, "Buzz", "Fizz"]);
  });

  it("returns [13, 14, 'FizzBuzz'] for (13, 15)", () => {
    expect(fizzBuzz6.createFizzBuzz()).toEqual([13, 14, "FizzBuzz"]);
  });
});
