// https://leetcode.com/problems/score-of-a-string/description/
// String
/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let sum = 0
    for (let i = 0; i < s.length; i++) {
        sum += s[i].charCodeAt(0)
        
    }
    return sum
};