// https://leetcode.com/problems/climbing-stairs/description/

// Math
// Dynamic Programming
// Memoization

/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
    const obj = {};
    const helper = function(number){
        if(number<3){
            return number;
        }
        if(obj[number]){
            return obj[number];
        }
        obj[number] = helper(number-1) + helper(number-2)
        return obj[number];
    }

    return helper(n);
};

console.log(climbStairs(5))
console.log(climbStairs(3),3)