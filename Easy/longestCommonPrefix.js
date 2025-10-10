// https://leetcode.com/problems/longest-common-prefix/
// Array
// String
// Trie

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	strs = strs.sort();
    const final = []
    for (let i = 0; i < strs[0].length; i++) {
       if(strs[0][i]!= strs[strs.length-1][i]){
        break;
       }
       else{
        final.push(strs[0][i])
       }
        
    }
    return final.join('')
};
// console.log(longestCommonPrefix(["reflower","flow","flight"]),'')
// console.log(longestCommonPrefix(["abab","aba","abc"]),"ab")
// console.log(longestCommonPrefix(["","b"]),"")
console.log(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
