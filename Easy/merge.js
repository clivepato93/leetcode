// https://leetcode.com/problems/merge-sorted-array/
// Topics 
// Array 
// Two Pointers 
// Sorting
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function (nums1, m, nums2, n) {
//   for (let i = nums1.length-1;i>=0;i--) {
//     // if(!n||!m) break
//    if(nums1[m-1]>=nums2[n-1]){
//     [nums1[m-1],nums1[i]] = [nums1[i],nums1[m-1]]
//     m--;
//    }
//    else if(n-1>-1){
//         [nums1[i],nums2[n-1]] = [nums2[n-1],nums1[i]]
//         n--;

//    }

// }}

var merge = function (nums1, m, nums2, n) {
let last  = m +n -1
  while (last>-1) {
    // if(!n||!m) break
   if(nums1[m-1]>=nums2[n-1]){
    [nums1[m-1],nums1[last]] = [nums1[last],nums1[m-1]]
    m--;
   }
   else if(n-1>-1){
        [nums1[last],nums2[n-1]] = [nums2[n-1],nums1[last]]
        n--;

   }
   last--

}}

// console.log(
//   merge((nums1 = [0, 0, 3, 0, 0, 0, 0, 0, 0]), 3, [-1, 1, 1, 1, 2, 3], 6)
// );
// console.log(merge([4,5,6,0,0,0],3,[1,2,3],3))
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))
