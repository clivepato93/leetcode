// https://leetcode.com/problems/search-insert-position/
// Topic
// Array
// Binary Search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] == target) return mid;
    else if (nums[mid] > target) r = mid - 1;
    else {
      l = mid + 1;
    }
  }
  return l
};

console.log(searchInsert([1,3,5,6],0),0)

// console.log(searchInsert([1, 3, 5, 6], 7), 4);
