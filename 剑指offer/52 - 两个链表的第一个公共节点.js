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
// 双指针法，浪漫相遇 遍历完自己的节点后 交换位置继续遍历 最后二者的总步数是一样 相遇时即为所求第一个祖先节点
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
