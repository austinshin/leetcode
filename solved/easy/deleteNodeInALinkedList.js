/**
 * 237
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  let temp = node;
  if (temp.next === null) {
    // do nothing
  } else {
    temp.val = temp.next.val;
    temp.next = temp.next.next;
  }
};
