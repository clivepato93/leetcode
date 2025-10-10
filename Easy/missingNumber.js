// https://leetcode.com/problems/missing-number/?envType=problem-list-v2&envId=binary-search
// Array
// Hash Table
// Math
// Binary Search
// Bit Manipulation
// Sorting

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums = nums.sort((a,b)=> a-b);
    let left = 0
    let right = nums.length-1
    while(left<=right){
        const mid = Math.floor(right-(right-left)/2)
        if(mid!= nums[mid]){
            right = mid-1
        }
        if(mid== nums[mid]){
            left = mid+1
        }
        
    }
    return left;
};  
console.log(missingNumber([0,2,3]),1)
console.log(missingNumber([1,2]),0)
console.log(missingNumber([0,1,2,3,4]),5)
console.log(missingNumber([3,0,1]),2)