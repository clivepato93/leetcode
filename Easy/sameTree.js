// https://leetcode.com/problems/same-tree/
// Tree
// Depth-First Search
// Breadth-First Search
// Binary Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

var isSameTree = function (p, q) {
 
    if(p==q){
        return true;
    }
	if (Boolean(p && q) == false) {
		return false;
	}
	if (p && q && p.val != q.val) {
		return false;
	}

	return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// 1. Both trees are empty
let t1 = null;
let t2 = null;
// console.log(isSameTree(t1, t2));


// t1 = new TreeNode(1);
// t2 = null;
// console.log(isSameTree(t1, t2)); 

// t1 = TreeNode(1);
// t2 = TreeNode(1);
// console.log(isSameTree(t1, t2))


// t1 = new TreeNode(1, TreeNode(2), TreeNode(3));
// t2 = new TreeNode(1, TreeNode(2), TreeNode(3));
// console.log(isSameTree(t1, t2)); // true

t1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
t2 = new TreeNode(1,  new TreeNode(2), new TreeNode(4));
console.log(isSameTree(t1, t2)); // false
