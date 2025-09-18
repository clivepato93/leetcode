// https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/

// Array
// Hash Table
// Greedy
// Sorting
// Heap (Priority Queue)
// Simulation

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {

    const uniqueNums = new Set()
    for(let i =0;i<nums.length;i++){
       if(!uniqueNums.has(nums[i]) && nums[i]){
        uniqueNums.add(nums[i])
       }
    }

    return uniqueNums.size
};

// To do more solutions