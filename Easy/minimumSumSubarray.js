// https://leetcode.com/problems/minimum-positive-sum-subarray/
// Topics 
// Array 
// Sliding Window
// Prefix Sum

/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function (nums, l, r) {
  let val = 0;
  for (let i = 0; i < nums.length; i++) {
   let total=0
    let check = 0
    for (let j = i; j < nums.length; j++) {
        total += nums[j];
        
        check++
      if (check>=l && check<=r) {
        if (!val && total > 0) {
          val = total;
        } else {
          val = total < val && total > 0 ? total : val;
        }

      }
    }
  }
  return val || -1;
};

console.log(minimumSumSubarray([-3, 17], 1, 2), 14);
// console.log(minimumSumSubarray([3, -2, 1, 4], 2, 3), 1);
// console.log(minimumSumSubarray([1,2,3,4],2,4),3)
