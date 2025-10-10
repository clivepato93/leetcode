// https://leetcode.com/problems/sort-an-array/
// Array
// Divide and Conquer
// Sorting
// Heap (Priority Queue)
// Merge Sort
// Bucket Sort
// Radix Sort
// Counting Sort
/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Merge Sort
var sortArray = function(arr) {
    	if (arr.length <= 1) {
		return arr;
	}
	let leftHalf = sortArray(arr.slice(0, Math.floor(arr.length / 2)));
	let rightHalf = sortArray(arr.slice(Math.floor(arr.length / 2)));
	let left = 0;
	let right = 0;
	const tempArr = [];
	while (left < leftHalf.length || right < rightHalf.length) {
		if (leftHalf[left] == undefined) {
			tempArr.push(...rightHalf.slice(right));
      right = rightHalf.length
		} else if (rightHalf[right] == undefined) {
			tempArr.push(...leftHalf.slice(left));
      left = leftHalf.length
		} else 
      if (leftHalf[left] <= rightHalf[right]) {
			tempArr.push(leftHalf[left]);
			left++;
		} else {
      tempArr.push(rightHalf[right]);
			right++;
		}
	}
	return tempArr;
};