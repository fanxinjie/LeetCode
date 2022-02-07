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
 * @solution 利用每一次调换头一个、当前的next，最好画张图可以看得更清楚。
 */
var reverseList = function (head) {
  let preNode = null,
    curNode = head;
  while (curNode !== null) {
    let nextNode = curNode.next;
    curNode.next = preNode;
    preNode = curNode;
    curNode = nextNode;
  }
  return preNode;
};
