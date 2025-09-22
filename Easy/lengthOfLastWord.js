// https://leetcode.com/problems/length-of-last-word/
// String

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count = 0;
    for (let i = s.length-1; i >= 0; i--) {
        if(/[a-z]/i.test(s[i])){
            count++;
        }
        else if(count && !(/[a-z]/i.test(s[i]))){
            i=-1;
        }
        
    }
    return count
};
console.log(lengthOfLastWord("   fly me   to   the moon  "),4)
console.log(lengthOfLastWord("Hello World"),5)