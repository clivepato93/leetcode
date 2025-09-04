// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
// Topics
// String
// Sliding Window

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const vowels = new Set(['a','e','i','o','u']);
  let sum = 0;
  for (let index = 0; index < k; index++) {
    sum += vowels.has(s[index])?vowels.has(s[index]):0;
  }
  let max = sum;
  for (let i = 1; i <= (s.length-k); i++) {
    
      sum-= vowels.has(s[i-1])?1:0;
      sum += vowels.has(s[i+(k-1)])?1:0;
      max = sum>max?sum:max
       
    
  }  
  return max
};


console.log(maxVowels("abciiidef",3),3)