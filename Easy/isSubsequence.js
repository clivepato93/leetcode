// https://leetcode.com/problems/is-subsequence/
// Two Pointers 
// String 
// Dynamic Programming

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let pointer = 0;
    for (let i = 0; i < t.length; i++) {
        if(pointer == s.length) return true
        if(s[pointer]== t[i]){
            pointer++;
        }
        
    }
    return pointer == s.length
};
console.log(isSubsequence("axc","ahbgdc"),false)
console.log(isSubsequence("abc","ahbgdc"),true)