// https://leetcode.com/problems/roman-to-integer/
// Topics 
// Hash Table
// Math 
// String
const romanNumerals = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let total = 0
    for (let i = s.length-1; i >= 0; i--) {
      
      const letter = s[i]
      if(letter=='V' && s[i-1]== 'I'){
        total+= romanNumerals[(s[i-1]+letter)]
        i--;
      }

      else if(letter=='X'&& s[i-1]== 'I'){
        total+= romanNumerals[(s[i-1]+letter)]
        i--
      }

     else if(letter=='L'&& s[i-1]== 'X'){
        total+= romanNumerals[(s[i-1]+letter)]
        i--
      }
    else  if(letter=='C' && s[i-1]== 'X'){
        total+= romanNumerals[(s[i-1]+letter)]
        i--
      }
     else if(letter=='D'&& s[i-1]== 'C'){
        total+= romanNumerals[(s[i-1]+letter)]
        i--
      }
    else  if(letter=='M'&& s[i-1]== 'C'){
        total+= romanNumerals[(s[i-1]+letter)]
        i--
      }

      else{
        total+= romanNumerals[letter]
      }
    }
    return total
};

// console.log(romanToInt("LVIII"),58)
console.log(romanToInt("MCMXCIV"),1994)