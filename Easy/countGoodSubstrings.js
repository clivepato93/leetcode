// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/
// Topics 
// Hash Table 
// String 
// Sliding Window
// Counting

/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let num =0
    for (let i = 0; i < (s.length-2); i++) {
        const chars = new Set(s.slice(i,i+3))
          if(chars.size==3) num++

    }
    return num
    
};




console.log(countGoodSubstrings("xyzzaz"),1)
console.log(countGoodSubstrings("aababcabc"),4)

