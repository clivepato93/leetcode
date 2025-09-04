// https://leetcode.com/problems/first-unique-character-in-a-string/
// Topics 
// Hash Table 
// String 
// Queue 
// Counting
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for(let i=0;i<s.length;i++){
        if(s.indexOf(s[i])==s.lastIndexOf(s[i])) return i
    }
    return -1  
};

var firstUniqChar = function(s) {
    const obj ={}
    for(let i=0;i<s.length;i++){
        if(s[i] in obj) obj[s[i]] =obj[s[i]]+1
        else{
            obj[s[i]]=1
        }
    }
    for(let i=0;i<s.length;i++){
        if(obj[s[i]]==1) return i
    }

    return -1  
};

console.log(firstUniqChar("leetcode"),0)