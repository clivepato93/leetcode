// https://leetcode.com/problems/reverse-vowels-of-a-string/
// Topics 
// Two Pointers 
// String

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const letters = [...s]
    let endPointer = s.length-1
    const reg = /[aieou]/i
    for (let i = 0; i < s.length; i++) {
       if(reg.test(letters[i]) && endPointer>i){
        for (endPointer; endPointer>i;endPointer--) {
           if(reg.test(letters[endPointer])){
            [letters[i],letters[endPointer]] =  [letters[endPointer],letters[i]]
            endPointer--
            break;
           }
        }
       }
        
    }
    return letters.join('')
};

console.log(reverseVowels("IceCreAm"),"AceCreIm")