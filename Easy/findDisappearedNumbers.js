// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
// Topics 
// Array 
// Hash Table
/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDisappearedNumbers = function(nums) {
    const numbers = new Set()
    for (let i = 0; i < nums.length; i++) {
       numbers.add(i+1)
    }
    for (let i = 0; i < nums.length; i++) {
       if(numbers.has(nums[i])) numbers.delete(nums[i])
        
    }
    return [...numbers]
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]),[5,6])