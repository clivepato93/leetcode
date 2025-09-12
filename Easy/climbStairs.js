// https://leetcode.com/problems/climbing-stairs/
// Topics 
// Math 
// Dynamic Programming
// Memoization
var climbStairs = function(n,step=0,obj={val:0}) {
    // console.log(obj)
    // wrong
    if(n<=2) return
    if(step>n) return;
    if (step==n){
        obj.val = obj.val+1;
        return;
    }
    climbStairs(n,step+=1,obj)
    climbStairs(n,step+=2,obj)
    
    return obj.val
};

console.log(climbStairs(3),3)