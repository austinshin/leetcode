/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 1->2->4  | 1->3->4
 */
var mergeTwoLists = function(l1, l2) {
  // start with whichever one is smaller l1 or l2  
  // tracker 
  //if l1 <= l2
  //  tracker.next -> l1 
  //    l1 = l1.next
  //if l1 > l2
  //   tracker.next -> l2 
  //   l2 = l2.next
  //   keep going l1 && l2 are null.
  if (l1.val <= l2.val) {
    var start = l1; 
    l1 = l1.next;

  } else {
    var start = l2;
    l2 = l2.next;
  }
  var return = start;
  while (l1 !== null && l2 !== null) {
    if (l1 === null) {
      start.next = l2;
      l2 = null;
      start = start.next;
    } else if (l2 === null) {
      start.next = l1;
      l1 = null;
      start = start.next;
    } else if (l1.val <= l2.val) {
      start.next = l1;
      l1 = l1.next;
      start = start.next;
    } else {
      start.next = l2;
      l2 = l2.next;
      start = start.next;
    }
  }
  return return;

};
