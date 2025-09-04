// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Topics 
// Array 
// Dynamic Programming


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0];
    let sell =prices[0]-prices[0];
    for (let i =1; i < prices.length; i++) {
        let profit = prices[i]-buy;
        if(prices[i]<buy){
            buy = prices[i]
        }
        else if(profit > 0){
            sell = profit>sell ? profit:sell
        }
        
    }
    return sell;
};  

console.log(maxProfit([7,1,5,3,6,4]),5)
console.log(maxProfit([7,6,4,3,1]),0)