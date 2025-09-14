// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Topics 
// Hash Table 
// String 
// Sliding Window


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const letters = new Set()
    let left = 0
    let size = 0
    for (let i = 0; i < s.length; i++) {
        if(letters.has(s[i])){
            
        
            for (left;letters.has(s[i])  ; left++) { 
                letters.delete(s[left])
                
            }
                        letters.add(s[i])

        }
        size = Math.max(size,letters.size)
          letters.add(s[i])
        
    }

    return size
};

console.log(lengthOfLongestSubstring("abcabcbb"),3)