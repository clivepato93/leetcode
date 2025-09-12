// https://leetcode.com/problems/binary-search/
// Topics 
// Array 
// Binary Search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0;
    let r = nums.length-1;
    while(l<=r){
        const mid = Math.floor((r+l)/2)
        if(nums[mid]==target) return mid
        else if(nums[mid]>target) r = mid-1
        else{
            l = mid+1
        }
    }
    return -1
};

console.log(search([-1,0,2,4,6,8],4),3)
console.log(search([-1,0,3,5,9,12],9),4)
console.log(search([-1,0,3,5,9,12],2),-1)