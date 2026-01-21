// https://leetcode.com/problems/fibonacci-number/submissions/?envType=problem-list-v2&envId=dynamic-programming
// Math
// Dynamic Programming
// Recursion
// Memoization
var fib = function(n,nums=[0,1]) {

  if(n<2) return nums[n]
  nums[n] = fib(n-2) + fib(n-1);
  return nums[n]
};


var fib = function(n) {
  let nums = [0,1];
  if(n<2) return nums[n]
  for(let i =2; i<=n;i++){
    nums[i] = nums[i-1] + nums[i-2];
  }  
  return nums[n]
};
