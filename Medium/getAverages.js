// https://leetcode.com/problems/k-radius-subarray-averages/
// Topics 
// Array 
// Sliding Window

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    const final = []
    let sum = 0
    for (let index = 0; index < 2*k+1; index++) {
        sum+=nums[index]
        
    }
 
    for (let i = 0; i < nums.length; i++) {
        if(i-k<0 || i+k>=nums.length) {
            final.push(-1)
        }
        else{
            final.push(Math.floor(sum/(2*k+1)))
            sum-= nums[i-k]
            sum+= nums[i+k+1]
        }
        
    }
    return final
};

console.log(getAverages([100000],0))
console.log(getAverages([7,4,3,9,1,8,5,2,6],3))
console.log(getAverages([8],10000))