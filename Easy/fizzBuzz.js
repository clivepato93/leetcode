// https://leetcode.com/problems/fizz-buzz/
// Topics 
// Math
// String
// Simulation
var fizzBuzz = function (n) {
      const arr = []
  for (let i = 1; i <= n; i++) {
    if (!(i % 5) && !(i % 3)) {
      arr.push("FizzBuzz");
    } 
    else if (!(i % 5)) arr.push("Buzz");
    else if (!(i % 3)) arr.push("Fizz");
    else arr.push(`${i}`)
  }
  return arr;
};

