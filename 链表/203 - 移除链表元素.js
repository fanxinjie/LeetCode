/**
 * @description 给你一个链表的头节点 head 和一个整数 val， 请你删除链表中所有满足 Node.val == val 的节点， 并返回 新的头节点。
 * 
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let dummyHead = new ListNode(0);
  dummyHead.next = head;

  let current = dummyHead;
  while (current.next != null) {
    if (current.next.val == val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return dummyHead.next;
};
