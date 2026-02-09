// https://leetcode.com/problems/number-of-1-bits/
// Divide and Conquer
// Bit Manipulation

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while(n){
        count++;
        n &= n - 1
    }
    return count;
};
