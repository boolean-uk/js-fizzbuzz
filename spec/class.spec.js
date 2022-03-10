// npx jasmine spec/class.spec.js

const FizzBomb = require("../src/class.js");

describe("FizzBuzz", () => {
  it("returns [1, 2] for (1, 2)", () => {
    let fizz = new FizzBomb(1, 2);
    expect(fizz.replaceNum()).toEqual([1, 2]);
  });

  it("returns ['Fizz', 52, 53, 'Fizz'] for (51, 54)", () => {
    let fizz = new FizzBomb(51, 54);
    expect(fizz.replaceNum()).toEqual(["Fizz", 52, 53, "Fizz"]);
  });

  it("returns [1, 2, 'Fizz'] for (1, 3)", () => {
    let fizz = new FizzBomb(1, 3);
    expect(fizz.replaceNum()).toEqual([1, 2, "Fizz"]);
  });

  it("returns ['Fizz', 'Buzz', 11, 'Fizz'] for (9, 12)", () => {
    let fizz = new FizzBomb(9, 12);
    expect(fizz.replaceNum()).toEqual(["Fizz", "Buzz", 11, "Fizz"]);
  });

  it("returns [4, 'Buzz', 'Fizz'] for (4, 6)", () => {
    let fizz = new FizzBomb(4, 6);
    expect(fizz.replaceNum()).toEqual([4, "Buzz", "Fizz"]);
  });

  it("returns [13, 14, 'FizzBuzz'] for (13, 15)", () => {
    let fizz = new FizzBomb(13, 15);
    expect(fizz.replaceNum()).toEqual([13, 14, "FizzBuzz"]);
  });
});
