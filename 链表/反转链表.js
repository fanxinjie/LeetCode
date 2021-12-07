/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @description 反转一个单链表。
 * @param {ListNode} head
 * @return {ListNode}
 */
// 

var reverseList = function (head) {
  let preNode = null,
    curNode = head;
  while (curNode !== null) {
    let nextNode = curNode.next;
    curNode.next = preNode;
    preNode = curNode;
    curNode = nextNode
  }
  return preNode;
};
