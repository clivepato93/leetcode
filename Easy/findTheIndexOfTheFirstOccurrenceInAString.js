// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

// to complete.. 
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let len = 0;
    let needlePos =0;
    for(let i =0;i<haystack.length;i++){
        if(needle[needlePos]== haystack[i]){
            needlePos++;
            len++;
            if(len == needle.length) return i-(len-1) 
        }
        else{

            needlePos==0?0:needlePos-2;
            len--;
        }
    }
    return -1
};

console.log(strStr("mississippi"
,"issip"
),4)
console.log(strStr("sadbutsad",'sad'))