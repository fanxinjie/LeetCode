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
 * 
 * 思路：先让链表正常走到 left - 1，之后，按照正常反转链表反正长度 right - left，返回 head。
 */
var reverseBetween = function (head, left, right) {
  let headNode = new ListNode(-1);
  headNode.next = head;

  let preNode = headNode;
  for (let i = 0; i < left - 1; i++) {
    preNode = preNode.next;
  }

  let curNode = preNode.next;
  for (let i = 0; i < right - left; i++) {
    // 每一个都不是直接将当前赋值，而是设置 next 值，比如，nextNode变化了，其实 curNode 也会对应变化的，虽然是在之后执行到的。
    const nextNode = curNode.next;
    curNode.next = nextNode.next;
    nextNode.next = preNode.next;
    preNode.next = nextNode;
    console.log('preNode ----->', preNode)
    console.log('curNode ----->', curNode)
    console.log('nexNode ----->', nextNode)
  }
  return headNode.next;
};
