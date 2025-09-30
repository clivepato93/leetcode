// https://leetcode.com/problems/squares-of-a-sorted-array/
// Array
// Two Pointers
// Sorting

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortedSquares = function(nums) {
//     let left = 0;
//     let right = nums.length-1;
//     const squares = []
//     for(let i =0;i<nums.length;i++){
// nums[i]*=nums[i]
//     }
//     while(left<=right){
//         if(nums[left]==nums[right]){
//             squares.unshift(nums[left])
//             left++;
//         }
//         else if(nums[left]>nums[right]){
//             squares.unshift(nums[left])
//             left++;
//         }
//         else{
//            squares.unshift(nums[right])
//             right--;
//         }
//     }
//     return squares
// };

var sortedSquares = function (nums) {
	let left = 0;
	let right = nums.length - 1;
	let pos = nums.length - 1;
	const squares = [];
	for (let i = 0; i < nums.length; i++) {
		nums[i] *= nums[i];
	}
	while (left <= right) {
		if (nums[left] == nums[right]) {
			squares[pos] = nums[left];
			left++;
		} else if (nums[left] > nums[right]) {
			squares[pos] = nums[left];
			left++;
		} else {
			squares[pos] = nums[right];
			right--;
		}
		pos--;
	}
	return squares;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]), [0, 1, 9, 16, 100]);
console.log(sortedSquares([-5, -3, -2, -1]), [1, 4, 9, 25]);
