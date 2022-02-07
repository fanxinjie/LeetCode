/**
 *
 * @description 如果有环则返回环第一个节点，否则返回null
 *
 * @param {ListNode} head
 * @return {boolean}
 * @solution 哈希表缓存
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

/**
 *
 * @description 如果有环则返回环第一个节点，否则返回null
 *
 * @param {ListNode} head
 * @return {boolean}
 * @solution 快慢指针
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
