// https://leetcode.com/problems/single-number/

// Topics 
// Array 
// Bit Manipulation

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let total = nums[0];
  for (let i = 1; i < nums.length; i++) {
    total = total ^ nums[i];
  }
  return total;
};




// console.log(singleNumber([2,2,1]))
console.log(singleNumber([4, 1, 2, 1, 2]));
