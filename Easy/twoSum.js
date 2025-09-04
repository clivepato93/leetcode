// https://leetcode.com/problems/two-sum/
// Topic 
// Array
// Hash Table 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    const obj ={}
    for(let i=0;i<nums.length-1;i++){
        for (let j = i+1; j < nums.length; j++) {
            if(nums[j]+nums[i]==target){
            return [i,j]
        }
            
        }
        

    }
};

// var twoSum = function(nums, target) {
//     const obj ={}
//     for(let i=0;i<nums.length;i++){
//         if(target-nums[i] in obj){
//             return [obj[target-nums[i]],i]
//         }
//         obj[nums[i]] = i

//     }
// };

console.log(twoSum([2,7,11,15],9))