// https://leetcode.com/problems/valid-palindrome/
// Two Pointers
// String
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/\s/g,'').replace(/[^a-zA-Z0-9]/g,'').replace(/[A-Z]/g,letter=>letter.toLowerCase())
    for (let index = 0; index < Math.floor(s.length/2); index++) {
        if(s[index]!==s[s.length-(index+1)]) return false
        
    }
    return true
};

console.log(isPalindrome("ab_a"

))
console.log(isPalindrome("0P"),false)
// console.log(isPalindrome("A man, a plan, a canal: Panama"),true)
