// https://leetcode.com/problems/longest-consecutive-sequence/

// Array
// Hash Table
// Union Find

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length==0) return 0
  const n = new Set(nums)
  let longest = 1;
  for (const num of n) {
    let currLongest = 1

    if(n.has(num -1)==false){

      for (let index = num; n.has(index+1); index++) {
        currLongest++;
      }
    }
    if(currLongest>longest){
        longest =currLongest

    }
  }
  return longest
};
