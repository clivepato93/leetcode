// https://leetcode.com/problems/contains-duplicate/

// Array
// Hash Table
// Sorting

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
    nums = nums.sort((a,b)=> b-a)
    for(let i =0; i<nums.length-1;i++){
        if(nums[i] == nums[i+1] ) return true
        
    }
    return false
};

var containsDuplicate = function(nums) {
    const numbers = {}
    for(let i =0; i<nums.length;i++){
        if(numbers[nums[i]] == true) return true
        else{
            numbers[nums[i]] = true
        }
    }
    return false
};