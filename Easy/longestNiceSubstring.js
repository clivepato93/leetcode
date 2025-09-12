// https://leetcode.com/problems/longest-nice-substring/
// Topics
// Hash Table
// String
// Divide and Conquer
// Bit Manipulation
// Sliding Window

/**
 * @param {string} s
 * @return {string}
 */

var longestNiceSubstring = function (s) {

  let longestSub = ''
  for (let left=0; left < s.length; left++) {
    for (let right = left+1; right <= s.length; right++) {
        const currSub = s.slice(left, right);
        const currChars = new Set(currSub);
        for (const char of currChars) {
          if (
            currChars.has(char.toLowerCase()) &&
            currChars.has(char.toUpperCase())
          ) {
            currChars.delete(char.toLowerCase());
            currChars.delete(char.toUpperCase());
          } 

        }
        if(!currChars.size){
            longestSub = currSub.length>longestSub.length?currSub:longestSub
        }
      }
    
        
    }
    return longestSub
};

console.log(longestNiceSubstring("hBubUYy"), "BubUYy");

console.log(longestNiceSubstring("HkhBubUYy"), "BubUYy");
console.log(longestNiceSubstring("BebjJE"),"BebjJE")
console.log(longestNiceSubstring("cChH"),'cChH')
console.log(longestNiceSubstring("Bb"),'Bb')
console.log(longestNiceSubstring('c'),'')
console.log(longestNiceSubstring("YazaAay"),'aAa')
