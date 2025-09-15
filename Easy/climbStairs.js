// https://leetcode.com/problems/climbing-stairs/
// Topics 
// Math 
// Dynamic Programming
// Memoization
// var climbStairs = function(n) {
//  let a = 0
//  let b = 1
//  for (let i = 0; i < n; i++) {
//     [a,b] = [b,a+b]    
//  }
//  return b
// };

var climbStairs = function(n,obj={}) {
    if(!n) {
        obj[n] = 1
        return 1;
    }
    if(n==1) {
        obj[n] = n
        return 1;
    }
    if(!obj[n-2] ){
        climbStairs(n-2,obj)
    } 
     if(!obj[n-1]){
        climbStairs(n-1,obj)
    } 
    obj[n] = obj[n-2]+  obj[n-1]
  

 return obj[n] 
};

// console.log(climbStairs(1))
// console.log(climbStairs(44))
console.log(climbStairs(4),5)
// console.log(climbStairs(3),3)