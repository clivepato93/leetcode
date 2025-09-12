// https://leetcode.com/problems/contains-duplicate-ii/
// Topics 
// Array 
// Hash Table 
// Sliding Window

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var containsNearbyDuplicate = function(nums, k) {
    const obj = {}
    for (let i = 0; i < k; i++) {
        if(nums[i] in obj) return true
        obj[nums[i]] = i
        
    }
    for (let i = 1; i <= nums.length-k; i++) {
        if( nums[i+(k-1)] in obj) return true
        delete obj[nums[i-1]]
        obj[nums[i+(k-1)]] = i
    }
    return false
};

console.log(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10]
,15),false)
// console.log(containsNearbyDuplicate([1,2,1],0),false)
// console.log(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,9]
// ,3),true)
// console.log(containsNearbyDuplicate([1,2,3,1,2,3],2),false)
// console.log(containsNearbyDuplicate([1,2,3,1],3),true)