// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Array Dynamic Programming


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit =0
    let price = prices[0]
    for(let i = 1;i<prices.length;i++){
        if(prices[i]<price) price = prices[i]
        profit = Math.max(profit, prices[i]-price)
    }
    return profit
};

// wont work due to constraints of the challenge
// var maxProfit = function(prices){

//     let max = 0;
//         const helper =(number,arr)=>{
//             if(!arr.length) return max
//             return Math.max(max,arr[0]-number,helper(number,arr.slice(1)))
//         }
//         for (let index = 0; index < prices.length; index++) {
//             max = helper(prices[index],prices.slice(index+1))
            
//         }
//         return max
        
// }

console.log(maxProfit([7,1,5,3,6,4]),5)