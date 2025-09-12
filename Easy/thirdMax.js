// https://leetcode.com/problems/third-maximum-number/description/

// Topics
// Array
// Sorting

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let firstMax = null;
  let secondMax = null;
  let thirdMax = null;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === firstMax || nums[i] === secondMax || nums[i] === thirdMax) {
      continue;
    }
    else if (firstMax === null) firstMax = nums[i];
    
    else if (nums[i] > firstMax) {
      thirdMax = secondMax;
      secondMax = firstMax;
      firstMax = nums[i];
    }
    
    else if (secondMax === null && nums[i] !== firstMax) secondMax = nums[i];
    
    else if (nums[i] > secondMax && nums[i] !== firstMax) {
      thirdMax = secondMax;
      secondMax = nums[i];
    }
    
    else if (
      thirdMax === null &&
      nums[i] !== firstMax &&
      nums[i] !== secondMax
    ) {
      thirdMax = nums[i];
    } 
    
    else if (
      nums[i] !== firstMax &&
      nums[i] !== thirdMax &&
      nums[i] > secondMax
    ) {
      thirdMax = secondMax;
      secondMax = nums[i];
    } 
    
    else if (nums[i] < secondMax && nums[i] > thirdMax && thirdMax !== null) {
      thirdMax = nums[i];
    }
  }
  return null !== thirdMax ? thirdMax : firstMax;
};
// console.log(thirdMax([5,2,4,1,3,6,0]),4)
// console.log(thirdMax([5,2,2]),5)
// console.log(thirdMax([-9732,-8023,536,2131,-7273,-3655,9989]),536)
// console.log(thirdMax([3,3,4,3,4,3,0,3,3]),0)
// console.log(thirdMax([1,-2147483648,2]),-2147483648)
// console.log(thirdMax([-2147483648,1,2]),-2147483648)
// console.log(thirdMax([1,2,2,5,3,5]),2)
// console.log(thirdMax([2,2,3,1]),1)
console.log(thirdMax([1, 2, 2]), 2);
