// http://leetcode.com/problems/maximum-average-subarray-i/
// Topics 
// Array 
// Sliding Window

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;
    for (let index = 0; index < k; index++) {
        sum+= nums[index]
        
    }
    let average = sum/k;
  for (let i = 1; i <= (nums.length-k); i++) {
    
    
        sum-= nums[i-1]
        sum+= nums[i+(k-1)]
        average = sum/k>average?sum/k:average
       
    
  }  
  return average
};
// console.log(findMaxAverage([5],1),5)
// console.log(findMaxAverage([1,12,-5,-6,50,3],4),12.75)
// console.log(findMaxAverage([-1],1),1)