// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
// Two Pointers
// String
// String Matching
// to complete.. 
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    let needlePos =0;
    for(let i =0;i<haystack.length;i++){
        for (let j = i; j < haystack.length; j++) {
            let match  = null;
            if(needle[needlePos]== haystack[j]){
                needlePos++;
                match = true
            }
            if(needle[needlePos]==undefined){
                return i
            }
            if(!match){
                needlePos=0
                break;
            }
            
        }
        needlePos = 0;
    }
    return -1
};
console.log(strStr("aaa",'aaaa'))
console.log(strStr("mississippi"
,"issip"
),4)
console.log(strStr("sadbutsad",'sad'))