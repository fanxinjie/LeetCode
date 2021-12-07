// 链表的题目形式相对单一，所以重点是理解思想和掌握几种方法。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
 * 你应当 保留 两个分区中每个节点的初始相对位置。
 * 
 * 思路：
 * 方案一：使用 left，right两个新链表，分别存储小于x，大于等于 x 的值，最后将两个链表拼接。
 * 方案二：使用 right 存储大于等于 x 的值，遍历初始数组，如果大于时，当前链表清除掉该值，且将值放入 right。如此下来，原本的链表只保留了小于 x 的值，和 right 进行拼接。
 * 
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
// 示例 1：
// 输入： head = [1, 4, 3, 2, 5, 2], x = 3
// 输出：[1, 2, 2, 4, 3, 5]

// 示例 2：
// 输入： head = [2, 1], x = 2
// 输出：[1, 2]
var partition = function (head, x) {
  let leftNode = new ListNode(-1),
    rightNode = new ListNode(-1);

  let leftT = leftNode,
    rightT = rightNode;
  while (head) {
    if (head.val < x) {
      leftT.next = head;
      leftT = leftT.next;
    } else {
      rightT.next = head;
      rightT = rightT.next;
    }
    head = head.next;
  }
  rightT.next = null;
  leftT.next = rightNode.next;
  return leftNode.next;
};
