// 给定单向链表的头指针和一个要删除的节点的值， 定义一个函数删除该节点。

// 返回删除后的链表的头节点。

// 注意： 此题对比原题有改动

// 示例 1:

//   输入: head = [4, 5, 1, 9], val = 5
// 输出: [4, 1, 9]
// 解释: 给定你链表中值为 5 的第二个节点， 那么在调用了你的函数之后， 该链表应变为 4 - > 1 - > 9.
// 示例 2:

//   输入: head = [4, 5, 1, 9], val = 1
// 输出: [4, 5, 9]
// 解释: 给定你链表中值为 1 的第三个节点， 那么在调用了你的函数之后， 该链表应变为 4 - > 5 - > 9.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  if (!head) return head;
  if (head.val === val) return head.next;

  let newNode = new ListNode();
  newNode = head;

  console.log('head', head);
  // 如果下一个不为空 且 下一个的值不等于目标值 val，往下找，如果是目标值的话，则结束 while 循环
  while (newNode.next != null && newNode.next.val != val) {
    newNode = newNode.next;
    console.log('head --->', head);
  }

  // 结束循环后 且 不为最后一个值，则表示为下一个 val 等于目标值， 则跳过下一个值。
  if (newNode.next !== null) {
    newNode.next = newNode.next.next;
    console.log('head --->', head);
  }

  return head;
};
