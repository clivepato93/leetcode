// https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/
// Topics Math


/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    const nums = {}
    let target = n
    n--;
    while(n){
        if(! (n%10)){

        }
        if(!String(n).includes('0') && !String(target-n).includes('0')) return [target-n,n]
        n--;
    }
};

console.log(getNoZeroIntegers(11),[2,9])