
// Array
// Hash Table
// Two Pointers
// Binary Search


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let first = 0
    let second = 0
    while(first!=nums1.length && second !=nums2.length){
        if(nums1[first]== nums2[second]) return nums1[first]
        if(nums1[first]>nums2[second]){
            second++;
        }
        else{
            first++;
        }
    }
    return -1
};

console.log(getCommon([1,2,3],[2,4]), 2);
console.log(getCommon([1,2,3,6],[2,3,4,5]), 2);
console.log(getCommon([1,2,3,4,5],[6,7,8,9]), -1);
console.log(getCommon([1,2,3,10,15],[4,5,6,10,20]), 10);
console.log(getCommon([1,3,5,7,9],[2,3,6,8,10]), 3);
console.log(getCommon([5,10,15,20],[1,2,3,4,5]), 5);
console.log(getCommon([100,200,300],[50,150,250,300]), 300);
console.log(getCommon([1],[1]), 1);
console.log(getCommon([1],[2]), -1);