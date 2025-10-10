// https://leetcode.com/problems/merge-sorted-array/
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
var merge = function(nums1, m, nums2, n) {
    let first = nums1.length-1;

    while(n>0){
        if(nums1[m-1]>=nums2[n-1]){
            [nums1[m-1],nums1[first]] =  [nums1[first],nums1[m-1]];

            m--;
            
        }
        else{
                        [nums1[first],nums2[n-1]] =  [nums2[n-1],nums1[first]]
                        n--;
        }
        
        first--;

    }
};
console.log(merge([4,5,6,0,0,0],3,[1,2,3],3))
// console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))