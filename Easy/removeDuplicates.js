// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Array 
// Two Pointers
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	let left = 0;
	let numbers = new Set();
    let count = 0
	for (let i = 0; i < nums.length; i++) {
        if(!(numbers.has(nums[i]))){
            numbers.add(nums[i])
            count++;
            [nums[i],nums[left]] = [nums[left],nums[i]];
            left++;
        }
        
    }
    return numbers.size
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), 5);
