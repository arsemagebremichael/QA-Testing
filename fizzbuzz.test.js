
const fizzBuzz = require("./fizzbuzz");
    test('returns "FizzBuzz" for numbers divisible by both 3 and 5', () => {
    expect(fizzBuzz(90)).toBe('FizzBuzz');
    expect(fizzBuzz(0)).toBe('FizzBuzz');
    expect(fizzBuzz(-15)).toBe('FizzBuzz');
  });
  test('returns "Fizz" for numbers divisible by 3', () => {
    expect(fizzBuzz(9)).toBe('Fizz');
    expect(fizzBuzz(12)).toBe('Fizz');
    expect(fizzBuzz(-3)).toBe('Fizz');
  });