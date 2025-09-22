// https://leetcode.com/problems/maximum-number-of-words-you-can-type/
// Hash Table 
// String

/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    const letters = new Set(brokenLetters)
    let v = 0
    let words = text.split(' ')
    for (let index = 0; index < words.length; index++) {
        let total = 0
      for (let x = 0; x < words[index].length; x++) {
        if(letters.has(words[index][x])){
            break;
        }
        else{
            total++;
        }
        
      }
      if(total== words[index].length) v++;
        
    }
    return v
};



console.log(canBeTypedWords("leet code","lt"))