// https://leetcode.com/problems/longest-common-prefix/
// Topics 
// Array 
// String 
// Trie
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length==1) return strs[0]
    let currentPrefix =''
    let min = null;
    for (let i = 0; i < strs.length; i++) {
        if(!min) min= strs[i].length
        else if(strs[i].length<min){
            min = strs[i].length
        }
        
    }
    for (let i = 0; i < min; i++) {
        for (let j = 0; j < strs.length-1; j++) {
        if(strs[j][i]!=strs[j+1][i]){
            return currentPrefix
        }
    }
    currentPrefix = currentPrefix+strs[0][i]
    }
    return currentPrefix
};

console.log(longestCommonPrefix(["flower","flow","flight"]),'fl')