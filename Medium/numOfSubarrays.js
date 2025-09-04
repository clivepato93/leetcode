// https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/
// Topics 
// Array 
// Sliding Window

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let sum = 0;
    for (let index = 0; index < k; index++) {
        sum+= arr[index]
        
    }
    
    let average = sum/k;
    let validArrays= average>=threshold?1:0
    for (let i = 1; i <= (arr.length-k); i++) {
       sum-= arr[i-1]
       sum+= arr[i+(k-1)]
       average = sum/k
    validArrays += average>= threshold?1:0
    }

    return validArrays
};

console.log(numOfSubarrays([2,2,2,2,5,5,5,8],3,4),3)