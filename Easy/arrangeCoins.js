// https://leetcode.com/problems/arranging-coins/?envType=problem-list-v2&envId=binary-search

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let coins = 0;
  for(let i =1;i<=n;i++){
      if(coins==n){
          return i
      }
      coins+= i
      if(coins>n){
          return i-1
      }
    }  
};

console.log(arrangeCoins(5),2)