/**
 * 
 * @description 如果有环则返回true，否则返回false
 * 
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) return false;
  let fast = head.next,
    slow = head;
  while (fast && fast.next) {
    if (fast == slow) return true;
    fast = fast.next.next;
    slow = slow.next;
  }
  return false;
};

/**
 * 
 * @description 如果有环则返回环第一个节点，否则返回null
 * 
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let hasSet = new Set();
  while (head) {
    if (hasSet.has(head)) {
      return head;
    }
    hasSet.add(head);
    head = head.next;
  }
  return null;
};
