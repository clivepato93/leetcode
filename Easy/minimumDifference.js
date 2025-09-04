// https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/

// Topics 
// Array 
// Sliding Window
//  Sorting

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    if(nums.length==1) return 0
    let minimum = Infinity;
    nums = nums.sort((a,b)=> a-b)

 
    for (let i = k; i <= nums.length; i++) {
        if(minimum==Infinity){
            minimum = nums[i-1]-nums[i-k]
        }
        else{
           minimum = Math.min(minimum,nums[i-1]-nums[i-k] )
        }
            
           
    }
    return minimum
};
// console.log(minimumDifference([90],1),0)
console.log(minimumDifference([9,4,1,7],2),2)