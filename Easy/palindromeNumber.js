// https://leetcode.com/problems/palindrome-number/
// Math

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false
    let copy = x
    let rev =0
    let power = 0
    while(x>0){
        let mod = 10-(x%10)
        rev*=10
        rev+= (10-mod)
        x= Math.floor(x/10)
        power++;
        console.log(rev,x)
    }
    return copy ==rev
};