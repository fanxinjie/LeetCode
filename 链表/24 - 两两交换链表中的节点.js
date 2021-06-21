// ssssss
var swapPairs = function (head) {
  const preNode = new ListNode(0);
  preNode.next = head;
  let temp = preNode;
  while (temp.next !== null && temp.next.next !== null) {
    const node1 = temp.next;
    const node2 = temp.next.next;
    temp.next = node2;
    node1.next = node2.next;
    node2.next = node1;
    temp = node1;
  }
  return preNode.next;
};
