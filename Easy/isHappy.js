// https://leetcode.com/problems/happy-number/

// Topics 
// Hash Table
// Math 
// Two Pointers

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const numbers ={};
    while(n!==1){
        numbers[n] = true
       n = [...String(n)].reduce((t,c)=>t+(c**2),0) 
        if(numbers[n]){
            return false
        }
       console.log() 
    }
    return true
};