/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 * @description 思路：利用 后续遍历，从后向前以及从前向后都应该一致，则为回文。
 */
var isPalindrome = function (head) {
  let left = head;
  function traverse(right) {
    if (right == null) return true;

    let res = traverse(right.next);
    res = res && right.val === left.val;
    left = left.next;
    return res;
  }
  return traverse(head);
};
