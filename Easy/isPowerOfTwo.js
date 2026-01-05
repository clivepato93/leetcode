// https://leetcode.com/problems/power-of-two/

var isPowerOfTwo = function(n) {
    
    if(n==1){
        return true
    }
 
    return n>0&&  n%2==0 && n.toString(2).indexOf('1') == n.toString(2).lastIndexOf('1') 
};



// console.log(isPowerOfTwo(1))
// console.log(isPowerOfTwo(16))

// console.log(isPowerOfTwo(3))
// console.log(isPowerOfTwo(2))