// https://leetcode.com/problems/permutation-in-string/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const curr = 0;
  const letter = [];
  const compare = {}
  for (let index = 0; index < 26; index++) {
    letter.push( 0);
    
  }
  for (let index = 0; index < s1.length; index++) {
    letter[s1[index].charCodeAt(0) - 97]++;
    compare[s1[index]]?compare[s1[index]]+=1:compare[s1[index]]=1
  }
  for (const element of compare) {
    if(compare[element]==letter[element.charCodeAt(0)-97]){
    }
  }
  for (let i = 1; i <= s2.length-s1.length; i++) {
    
  
    
   }
   

  
};

console.log(checkInclusion("ab", "eidbaooo"), true);
