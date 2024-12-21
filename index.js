// 1. Create a variable called `multiply` that multiplies `num1` and `num2` to equal 62.
const num1 = 31;
const num2 = 2;
const multiply = num1 * num2; // Result: 62

// 2. Create a variable called `random` that generates a random integer greater than 0.
const random = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100

// 3. Create a variable called `mod` that calculates the remainder of dividing `num3` by `num4`.
const num3 = 24;
const num4 = 5;
const mod = num3 % num4; // Result: 4

// 4. Create a variable called `max` that finds the highest number in a set; the value should be `20`.
const max = Math.max(1, 5, 10, 15, 20); // Result: 20

// Export variables for testing (if required by the test suite)
module.exports = { multiply, random, mod, max };
