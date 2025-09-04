// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
// Topics 
// Two Pointers 
// String 
// String Matching

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function(haystack, needle) {
//     let start =null;
//     let position =0
//     for (let index = 0; index < haystack.length; index++) {
//         const element = haystack[index];
//         if(element==needle[0]){
//             start=0
//             position++;
//         }
//         else if(element=needle[position]){
//             position
//         }
        
//     }
// };

var strStr = function(haystack,needle){
    const res = haystack.match(needle)
    return res ? res.index:-1
}
console.log(strStr("sadbutsad",'sad'),0)
console.log(strStr("leetcode",'leeto'),-1)