// https://leetcode.com/problems/get-equal-substrings-within-budget/
// Topics String 
// Binary Search 
// Sliding Window
// Prefix Sum

/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let maxSub = 0
    let currentCost = 0
    let currentSub = 0
    let i= 0
    let start =0
    while(i < t.length){
    
        if(currentCost+Math.abs(s[i].charCodeAt(0)-t[i].charCodeAt(0))>maxCost){
            currentCost-=Math.abs(s[start].charCodeAt(0)-t[start].charCodeAt(0))
            currentSub--;
            start++;
        }

            currentCost+=Math.abs(s[i].charCodeAt(0)-t[i].charCodeAt(0))
        currentSub++;
     
        currentSub>maxSub?maxSub= currentSub:maxSub =maxSub
        
        i++;
    }

    return maxSub
};

console.log(equalSubstring("krrgw"
,"zjxss"
,19),2)

console.log(equalSubstring("abcd","bcdf",3),3)
console.log(equalSubstring("abcd","acde",0),1)
console.log(equalSubstring("abcd","cdef",3),1)