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
    if(left == right){
      return head;
    }


};
