// https://leetcode.com/problems/maximum-69-number/

// Math
// Greedy

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let digits = [...`${num}`]
    for (let index = 0; index < digits.length ; index++) {
        if(digits[index]=='6'){
            digits[index] = '9'
            return +digits.join('')
        }
        
        
    }
return +digits.join('')};