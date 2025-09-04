// https://leetcode.com/problems/merge-two-sorted-lists/?envType=problem-list-v2&envId=linked-list
// Topics 
// Linked List
// Recursion
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(list1, list2) {
    if(!list1) return list2
    if(!list2) return list2
    return list1.val>list2.val? new ListNode(list2.val,mergeTwoLists(list1,list2.next)):new ListNode(list1.val,mergeTwoLists(list1.next,list2))
};