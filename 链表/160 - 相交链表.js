/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  let left = headA,
    right = headB;

  // 当两者相同时，则是第一次相遇，不相同时，如果自身是最后一个节点null，则设置为另一个链表的头。
  while (left != right) {
    left = left == null ? headB : left.next;
    right = right == null ? headA : right.next;
  }

  return left;
};
