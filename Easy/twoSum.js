// https://leetcode.com/problems/two-sum/
// Array 
// Hash Table
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  const table = {}
  for(let i =0;i<nums.length;i++){
    if(table[target-nums[i]] == undefined) table[nums[i]] = i
    else return [table[target-nums[i]],i]
  }  

};

console.log(twoSum([2,7,11,15],9),[0,1])