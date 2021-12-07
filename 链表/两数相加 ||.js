 /**
  * Definition for singly-linked list.
  * function ListNode(val, next) {
  *     this.val = (val===undefined ? 0 : val)
  *     this.next = (next===undefined ? null : next)
  * }
  */
 /**
  * @param {ListNode} l1
  * @param {ListNode} l2
  * @return {ListNode}
  */
 var addTwoNumbers = function (l1, l2) {

 };

 //  stack1 = []
 //         stack2 = []
 //         p1 = l1
 //         p2 = l2
 //         while p1:
 //             stack1.append(p1.val)
 //             p1 = p1.next
 //         while p2:
 //             stack2.append(p2.val)
 //             p2 = p2.next
 //         res = []
 //         s = 0
 //         while stack1 or stack2:
 //             if stack1:
 //                 s += stack1.pop()
 //             if stack2:
 //                 s += stack2.pop()
 //             res.append(s % 10)
 //             s //= 10
 //         if s == 1:
 //             res.append(1)
 //         head = ListNode(res.pop())
 //         cur_node = head
 //         while len(res):
 //             cur_node.next = ListNode(res.pop())
 //             cur_node = cur_node.next
 //         return head
