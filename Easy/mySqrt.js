// https://leetcode.com/problems/sqrtx/
// Math
// Binary Search

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
	let left = 0;
	let right = x;
	while (left <= right) {
		const mid = Math.floor(left + (right - left) / 2);
		if (mid ** 2 == x) {
			return mid;
		} else if (mid ** 2 > x) {
			right = mid-1;
		} else {
			left = mid + 1;
		}
	}
	return right;
};

console.log(mySqrt(8));
