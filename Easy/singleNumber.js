// https://leetcode.com/problems/single-number/
// Array
// Bit Manipulation

/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//     if(nums.length==1) return nums[0]
//     let ans = nums[0];
//     for (let index = 1; index < nums.length; index++) {
//         ans ^= nums[index]
        
//     }
//     return ans
// };
var singleNumber = function(nums) {
    if(nums.length==1) return nums[0]

    for (let index = 1; index < nums.length; index++) {
        nums[index] ^= nums[index-1]
        
    }
    return nums[nums.length-1]
};
console.log(singleNumber([4,1,2,1,2]),4)
console.log(singleNumber([2,2,1]),1)