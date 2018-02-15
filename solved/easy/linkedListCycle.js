/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 141
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let a = head;
  let b = head;

  while (a !== null) {
    if (b === null || b.next === null) {
      return false;
    }
    a = a.next;
    b = b.next.next;
    if (a === b) {
      return true;
    }
  }
  return false;
};
