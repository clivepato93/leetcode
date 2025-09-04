// https://leetcode.com/problems/palindrome-number/
// Topics 
// Math
var isPalindrome = function(x) {
    const ref = x
    let num = 0
    if(x<0) return false
    while(x>0){
        const mod = x%10
        num*=10
        num+=mod
        x/=10
        x= Math.floor(x)
    }
    return num==ref
};

// console.log(isPalindrome(121),true)
console.log(isPalindrome(10),false)