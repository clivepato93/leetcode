// https://leetcode.com/problems/min-cost-climbing-stairs/

// Array
// Dynamic Programming
/**
 * @param {number[]} cost
 * @return {number}
 */

var minCostClimbingStairs = function (cost) {
    const obj ={};
    const helper = function(index){
        if(obj[index]!=undefined){
            return obj[index]
        }
        if(cost[index]== undefined){

            return 0
        }
        obj[index] = cost[index]
        obj[index]+= Math.min(helper(index+1),helper(index+2))
        return obj[index]
    }
  
	helper(0)

    return Math.min(obj[0],obj[1])
};

// console.log(minCostClimbingStairs([0,1,1,1]),1)
// console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
// ),6)
// console.log(minCostClimbingStairs([0,0,1,1]),1)
// console.log(minCostClimbingStairs([10, 15]), 10);
console.log(minCostClimbingStairs([10, 15, 20]), 15);
