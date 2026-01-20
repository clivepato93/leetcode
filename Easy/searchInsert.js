// https://leetcode.com/problems/search-insert-position/
// Array
// Binary Search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	let left = 0;
	let right = nums.length - 1;
	while (left <= right) {
		const mid = Math.floor(right - (right - left) / 2);
		if (nums[mid] == target) {
			return mid;
		} else if (nums[mid] > target) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	return left;
};

var searchInsert = function (nums, target,left=0,right = nums.length-1) {
	if(left>right) return left
		const mid = Math.floor(right - (right - left) / 2);
		if (nums[mid] == target) {
			return mid;
		} else if (nums[mid] > target) {
			return searchInsert(nums,target,left, mid-1)
		} else {
            return searchInsert(nums,target,mid+1,right)
		
		}
	
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 7));
