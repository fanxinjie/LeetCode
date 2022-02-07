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

  /**
   * 当两者相同时， 则是第一次相遇， 不相同时， 如果自身是最后一个节点null， 则设置为另一个链表的头。
   * 如果不同的时候，什么跳出循环呢？
   *  - 两者长度相同时，第一次循环到最后一个，两者都为 null，跳出循环
   *  - 两者长度不同时，第一次循环会赋予 对方原始值，当 较长的 值 被赋予对方值时，此时长度是一样的，例如
   *    A:[1,2,3],B:[4,5,6,7], A = null, 此时 B = [7],下一次 A [4,5,6,7], B=null, 下一次 A [5,6,7],B [1,2,3]。最后还是两者会同时为null。
   */
  while (left != right) {
    left = left == null ? headB : left.next;
    right = right == null ? headA : right.next;
  }
  return left;
};
