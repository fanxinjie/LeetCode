/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @description 给你单链表的头指针 head 和两个整数 left 和 right， 其中 left <= right。 请你反转从位置 left 到位置 right 的链表节点， 返回 反转后的链表。
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 * 输入： head = [1, 2, 3, 4, 5], left = 2, right = 4
 * 输出：[1, 4, 3, 2, 5]
 */
var reverseBetween = function (head, left, right) {
  let headNode = new ListNode(-1);
  headNode.next = head;

  let preNode = headNode;
  for (let i = 0; i < left - 1; i++) {
    preNode = preNode.next;
  }
  console.log('preNode', preNode)

  let curNode = preNode.next;
  for (let i = 0; i < right - left; i++) {
    const nextNode = curNode.next;
    curNode.next = nextNode.next;
    nextNode.next = preNode.next;
    preNode.next = nextNode;
    console.log('preNode ----->', preNode)
  }

  return headNode.next;
};
