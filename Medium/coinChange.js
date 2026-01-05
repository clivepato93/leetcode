// /https://leetcode.com/problems/coin-change/description/

// var coinChange = function (coins, amount) {
//   const minChange = Array.from({ length: amount + 1 }).fill(Infinity);
//   minChange[0] = 0;
//   for (let i = 0; i < coins.length; i++) {
//     for (let j = 1; j <= amount; j++) {
//       if ((j- coins[i]) >= 0 ){

//           minChange[j] = Math.min(minChange[j - coins[i]] + 1, minChange[j]);
//         }
//       }
//     }

//   return minChange[amount]< Infinity ? minChange[amount]:-1;
// };

// console.log(coinChange([1, 2, 5], 3), 2);

function coinChange(coins, amount) {
  let minCoins = 0;
  const values = [];
  const seen = new Set();
  values.push(0);
  let iterator = values.length;
  while (values.length) {
    for (let i = 0; i < iterator; i++) {
      if (values[0] == amount) {
        return minCoins;
      }
      const coin = values.shift();
      for (let j = 0; j < coins.length; j++) {
        if (seen.has(coins[j] + coin)) {
          continue;
        } else {
          coins[j] + coin <= amount ? values.push(coins[j] + coin) : values;
          seen.add(coins[j] + coin);
        }
      }
    }
    minCoins++;
    iterator = values.length;
  }
  return -1;
}

function coinChange(coins, amount) {
  let minCoins = 0;
  const values = [];
  const seen = new Set();
  values.push(0);
  let size = 0;

  while (size<values.length) {
    let length = values.length
    for (let i = size; i < length; i++) {
      const coin = values[i];
      if (coin == amount) {
        return minCoins;
      }
      for (let j = 0; j < coins.length; j++) {
        if (seen.has(coins[j] + coin) == false && coins[j] + coin <= amount) {
          values.push(coins[j] + coin);
          
        }
        seen.add(coins[j] + coin);
      }
    }
    minCoins++;
    size = length
  }
  return -1;
}
console.log(coinChange([1, 2, 5], 100), );
// console.log(coinChange([1], 2), 2);
// console.log(coinChange([2], 3), -1);

// console.log(coinChange([1], 0), 0);
// console.log(coinChange([1, 2, 5], 11), 3);
