// https://leetcode.com/problems/merge-two-sorted-lists/
// Linked List
// Recursion

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  return !list1?list2: !list2 ? list1:
  list1.val == undefined 
    ? list2
    : list2.val == undefined 
    ? list1
    : list2.val > list1.val
    ? new ListNode(list1.val, mergeTwoLists(list1.next, list2))
    : new ListNode(list2.val, mergeTwoLists(list1, list2.next));
};

// Iteratively to complete

// const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));

// Second list: 1 -> 3 -> 4
// const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));


// console.log(
//   mergeTwoLists(
//     new ListNode(1, new ListNode(2, new ListNode(4))),
//     new ListNode(2)
//   )
// );

console.log(
  mergeTwoLists(
    new ListNode(1, new ListNode(2, new ListNode(4))),
    new ListNode(1, new ListNode(3, new ListNode(4)))
  )
);
