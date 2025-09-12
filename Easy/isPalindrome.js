// https://leetcode.com/problems/valid-palindrome/
// Topics 
// Two Pointers
// String
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const letters = s.replace(/[A-Z]/g,e=>e.toLowerCase()).replace(/[^a-z0-9]/g,'')
    for(let i =0;i<Math.floor(letters.length/2);i++){
        if(letters[i]!=letters[letters.length-(i+1)]) return false
    }
    return true
};