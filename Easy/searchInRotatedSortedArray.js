// https://leetcode.com/problems/search-in-rotated-sorted-array/
// Array
// Binary Search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	// find the pivot
	let right = nums.length - 1;
	let pivot = 0;
	while (pivot < right) {
		const mid = Math.floor((pivot + right) / 2);
		if (mid < nums.length - 1 && nums[mid] > nums[mid + 1]) {
			pivot = mid + 1;
		} else if (nums[mid] > nums[right]) {
			pivot = mid + 1;
		} else {
			right = mid;
		}
	}
	let left;

	if (pivot - 1 >= 0 && nums[0] <= target && target <= nums[pivot - 1]) {
		 left = 0;
		right = pivot - 1;

	} else if (nums[pivot] <= target && target <= nums[nums.length - 1]) {
		 left = pivot;
		right = nums.length - 1;

	}

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		if (nums[mid] == target) {
			return mid;
		} else if (nums[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return -1;
};

// console.log(search([1, 3, 5], 1), 0);
// console.log(search([3,1],1),1)
// console.log(search([3,1],3),0)
// console.log(search([1,3],1),0)
console.log(search([3, 5, 1], 3), 0);
// console.log(search([4, 5, 6, 7, 0, 1, 2], 0), 4);
// console.log(search([4, 5, 6, 7, 0, 1, 2], 3), -1);
// console.log(search([6,7,8,1,2,3,4,5],2),4)
