/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// var maxDepth = function (root) {
//   if (!root) return 0;

//   let leftDepth = 1 + maxDepth(root.left);
//   let rightDepth = 1 + maxDepth(root.right);
//   return Math.max(leftDepth, rightDepth);
// };


// BFS
var maxDepth = function (root) {
    if (!root) return 0;
  let total = 0;
  const queue = [root];
  let size = queue.length;
  while(queue.length){
    for (let row = size; row >0; row--) {
       let currRoot = queue.shift();

       if(currRoot.left){

            queue.push(currRoot.left)
          
        }
         if(currRoot.right){

            queue.push(currRoot.right)
        
        }
    }
    size = queue.length;
    
    total++;
  


  }
  return total
};
