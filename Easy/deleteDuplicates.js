// https://leetcode.com/problems/remove-duplicates-from-sorted-list/
// Linked List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}
var deleteDuplicates = function (head) {
	let curr = head;
	while (curr && curr.next) {
		if (curr.val == curr.next.val) {
			curr.next = curr.next.next;

		}else{

        curr = curr.next
        }
	}
    return head
};
console.log(deleteDuplicates(new ListNode(
			1,
			new ListNode(1, new ListNode(2)))));

console.log(
	deleteDuplicates(
		new ListNode(
			1,
			new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))
		)
	)
);
