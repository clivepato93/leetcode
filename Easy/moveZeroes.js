// https://leetcode.com/problems/move-zeroes/
// Topics 
// Array 
// Two Pointers

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let leftPointer = 0
    for(let i = 1;i<nums.length;i++){
                if(nums[leftPointer]!=0) leftPointer++;

        else if(nums[i]){
            [nums[i],nums[leftPointer]] = [nums[leftPointer],nums[i]]
            leftPointer++;
        }
    }
};
console.log(moveZeroes([1,2,3,1]
))
console.log(moveZeroes([0,1,0,3,12]))