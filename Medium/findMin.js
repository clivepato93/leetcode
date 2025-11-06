// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
// Array
// Binary Search

/**
 * @param {number[]} nums
 * @return {number}
 */

// var findMin = function(nums){
//     // if(nums.length==1) return nums[0]
//     // find the pivot
//     let left = 0;
//     let right = nums.length-1;
//     if(nums[left]<nums[right]) return nums[left]
//     while(left<right){
//         const mid = Math.floor((left+right)/2)
//         if(mid < nums.length - 1 && nums[mid]>nums[mid+1]){
//          return nums[mid+1];   
//         }
//         else if(nums[mid]> nums[right]){
//             left = mid+1
            
//         }
//         else{
//             right = mid;
//         }
//     }
//     return nums[left]
// }   

var findMin = function(nums){
    
}


console.log(findMin([1]),1)
console.log(findMin([4,5,1,2,3]),1)
console.log(findMin([3,1,2]),1)
console.log(findMin([11,13,15,17]),11)
console.log(findMin([4, 5, 6, 7, 0, 1, 2]), 0);
