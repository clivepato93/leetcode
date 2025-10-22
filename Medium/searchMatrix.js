// https://leetcode.com/problems/search-a-2d-matrix/
// Array
// Binary Search
// Matrix

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
  let rleft = 0;
  let right = matrix.length - 1;
  let rowLen = matrix[0].length - 1;
  while (rleft <= right) {
    let mid = Math.floor(right - (right - rleft) / 2);

    if (matrix[mid][0] <= target && target<=matrix[mid][rowLen] ) {
      rleft = mid;
      right = -1;
    } else if (matrix[mid][0] < target) {
      rleft = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  let left = 0;
if(matrix[rleft]!=undefined){

    while (left <= rowLen) {
        let mid = Math.floor(rowLen - (rowLen - left) / 2);
        
        if (matrix[rleft][mid] == target) {
     return true
    } else if (matrix[rleft][mid] < target) {
      left = mid + 1;
    } else {
        rowLen = mid - 1;
    }
}
}
return false
}
console.log(searchMatrix([[1]], 2), 2)   
// console.log(searchMatrix([[1]], 1), 1) 
// console.log(
//   searchMatrix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     3
//   ),
//   true
// );
// console.log(searchMatrix([[1],[3]],3),true)
console.log(searchMatrix([[1],[3],[5],[7]], 6), 6)
// console.log(searchMatrix([[1],[3],[5],[7]], 5), 5)