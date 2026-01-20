// https://leetcode.com/problems/search-in-rotated-sorted-array/description/

// Array
// Binary Search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function (nums, target) {
//     let left = 0;
//     let right = nums.length-1;
//     let pivot;
//     while(left<=right){
//         const mid = Math.floor(right - (right-left)/2);
//         if(nums[mid]==target){
//             return mid
//         }
//         else if(nums[mid]> nums[right] && nums[mid]> nums[mid+1]){
//             pivot= mid;
//             break;
//         }
//         else if(nums[mid]> nums[right] && nums[mid]< nums[mid+1]){
//             left= mid;
  
//         }
//        else if(nums[mid]<nums[left]){
//             right = mid;
//         }
//         else{
//             break
//         }
//     }
//     if(pivot >=0){
//         let ll = 0;
//         let lr = pivot;
//         while(ll<=lr){
//         const mid = Math.floor(lr - (lr-ll)/2);
//         if(nums[mid]==target){
//             return mid
//         }
//         else if(nums[mid]> target ){
//             lr = mid-1;
//         }
        
//        else {
//         ll = mid+1
//        }
//     }
//     if(nums[ll]==target){
//         return ll
//     }
//     }
//     if(pivot>=0){
//         let rl = pivot+1;
//         let rr = nums.length-1;
//              while(rl<=rr){
//         const mid = Math.floor(rr - (rr-rl)/2);
//         if(nums[mid]==target){
//             return mid
//         }
//         else if(nums[mid]> target ){
//             rr = mid-1;
//         }
        
//        else {
//         rl = mid+1 
//        }
//     }
//     if(nums[rl]==target){
//         return rl
//     }
//     }
//     else{
//          let ll = 0;
//         let lr = nums.length-1;
//         while(ll<=lr){
//         const mid = Math.floor(lr - (lr-ll)/2);
//         if(nums[mid]==target){
//             return mid
//         }
//         else if(nums[mid]> target ){
//             lr = mid-1;
//         }
        
//        else {
//         ll = mid+1
//        }
//     }
//     if(nums[ll]==target){
//         return ll
//     } 
//     }
//     return -1
// };


// var search = function (nums, target) {
//     let left = 0;
//     let right = nums.length-1;
//     let pivot;
//     while(left<=right){
//         const mid = Math.floor(right - (right-left)/2);
//         if(nums[mid]==target){
//             return mid
//         }
//         else if(nums[mid]> nums[right] && nums[mid]> nums[mid+1]){
//             pivot= mid;
//             break;
//         }
//         else if(nums[mid]> nums[right] && nums[mid]< nums[mid+1]){
//             left= mid;
  
//         }
//        else if(nums[mid]<nums[left]){
//             right = mid;
//         }
//         else{
//             break
//         }
//     }
//     if(pivot >=0){
//         let ll = 0;
//         let lr = pivot;
//         while(ll<=lr){
//         const mid = Math.floor(lr - (lr-ll)/2);
//         if(nums[mid]==target){
//             return mid
//         }
//         else if(nums[mid]> target ){
//             lr = mid-1;
//         }
        
//        else {
//         ll = mid+1
//        }
//     }
//     if(nums[ll]==target){
//         return ll
//     }
//     }
//     if(pivot>=0){
//         let rl = pivot+1;
//         let rr = nums.length-1;
//              while(rl<=rr){
//         const mid = Math.floor(rr - (rr-rl)/2);
//         if(nums[mid]==target){
//             return mid
//         }
//         else if(nums[mid]> target ){
//             rr = mid-1;
//         }
        
//        else {
//         rl = mid+1 
//        }
//     }
//     if(nums[rl]==target){
//         return rl
//     }
//     }
//     else{
//          let ll = 0;
//         let lr = nums.length-1;
//         while(ll<=lr){
//         const mid = Math.floor(lr - (lr-ll)/2);
//         if(nums[mid]==target){
//             return mid
//         }
//         else if(nums[mid]> target ){
//             lr = mid-1;
//         }
        
//        else {
//         ll = mid+1
//        }
//     }
//     if(nums[ll]==target){
//         return ll
//     } 
//     }
//     return -1
// };

var search = function(nums, target) {
let l = 0;
let r = nums.length-1;
while(l<=r){
    const mid = Math.floor((l +r)/2);
// console.log(mid,nums[mid],nums)
    if(nums[mid]== target) return mid
    if(nums[l]<= nums[mid]){
        console.log('first if')
        if(target < nums[mid] && target >= nums[l]){
            console.log('first if nested if')
            r= mid-1;
        }
        else{
            console.log('first if nested else')
            l = mid +1;
        }
    }
    else{
        if(target > nums[mid] && target <= nums[r]){
            l = mid+1
        }
        else{
            r=mid-1;
        }
    }
}
    return -1
};

console.log(search([1,3,5],1),0)
// console.log(search([3,1],1),-1)
// console.log(search([1,3],0),-1);
// console.log(search([1], 1), 0);
// console.log(search([4,5,6,7,0,1,2],0),4)
// console.log(search([1], 0), -1);
// console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9], 5), 4);
// console.log(search([6, 7, 1, 2, 3, 4, 5], 6), 0);
// console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 3), 7);
// console.log(search([8,9,10,1,2,3,4,5,6,7],11),-1);
/*
[1]
0
[1,2,3,4,5,6,7,8,9]
5
[6,7,1,2,3,4,5]
6
[4,5,6,7,8,1,2,3]
3
[8,9,10,1,2,3,4,5,6,7]
11

*/
