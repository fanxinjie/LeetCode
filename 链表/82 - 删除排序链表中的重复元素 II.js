/**
 * @description 存在一个按升序排列的链表， 给你这个链表的头节点 head， 请你删除链表中所有存在数字重复情况的节点， 只保留原始链表中 没有重复出现 的数字。
 * 返回同样按升序排列的结果链表。
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let dummyHead = new ListNode(-1);
  dummyHead.next = head;

  let cur = dummyHead;
  while (cur.next && cur.next.next) {
    if (cur.next.val == cur.next.next.val) {
      // 另一个做法，删除重复元素
      // let delNode = cur.next.next;
      // while (delNode.next && delNode.val == delNode.next.val) {
      //   delNode = delNode.next;

      // }
      // cur.next = delNode.next;
      // delNode.next = null;

      let x = cur.next.val;
      while (cur.next && cur.next.val === x) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }
  return dummyHead.next;
};
