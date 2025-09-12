// https://leetcode.com/problems/contains-duplicate/
// Topics 
// Array 
// Hash Table 
// Sorting

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return new Set(nums).size != nums.length
};