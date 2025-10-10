// https://leetcode.com/problems/find-target-indices-after-sorting-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    const arr =[]
  nums = nums.sort((a,b)=>a-b);
  for (let i = 0; i < nums.length; i++) {
    if(nums[i]==target) arr.push(i)
    
  } 
  return arr; 
};

console.log(targetIndices([1,2,5,2,3],2),[1,2])