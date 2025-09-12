// http://leetcode.com/problems/find-numbers-with-even-number-of-digits/
// Topics
// Array
// Math
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  const numbers = 0;
  for (let index = 0; index < nums.length; index++) {
    let count = 0;
    while (nums[index] > 0) {
      nums[index] /= 10;
      nums[index] = Math.floor(nums[index]);
      count++;
    }
    if (count % 2 == 0) numbers++;
  }
  return numbers;
};

var findNumbers = function (nums) {
  const numbers = 0;
  for (let index = 0; index < nums.length; index++) {
    if (String(nums[i]).length % 2 == 0) numbers++;
  }
  return numbers;
};

console.log(findNumbers([12, 345, 2, 6, 7896]), 2);
