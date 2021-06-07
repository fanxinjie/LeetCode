// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，只能调整树中节点指针的指向。
// 为了让您更好地理解问题，以下面的二叉搜索树为例：
// 我们希望将这个二叉搜索树转化为双向循环链表。链表中的每个节点都有一个前驱和后继指针。对于双向循环链表，第一个节点的前驱是最后一个节点，最后一个节点的后继是第一个节点。

// 下图展示了上面的二叉搜索树转化成的链表。“head” 表示指向链表中有最小元素的节点。
/**
 * 
 */

/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */

// var treeToDoublyList = function (root) {
//   if (root == null) return null;

//   let pre = new Node(),
//     head = new Node();

//   function dfs(cur) {
//     if (cur == null) return;
//     dfs(cur.left); 
//     if (pre != null) {
//       pre.right = cur;
//     } else {
//       head = cur;
//     }
//     cur.left = pre;
//     pre = cur;
//     dfs(cur.right);
//   }

//   dfs(root); // 开始从根结点遍历
//   head.left = pre;
//   pre.right = head;

//   return head;
// };



// ac地址：https://leetcode-cn.com/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/
// 原文地址：https://xxoo521.com/2020-02-06-btree-link/

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (!root) {
    return;
  }

  let head = null;
  let pre = head;
  inorder(root);

  // 完成中序遍历后，pre指向了最后一个节点，将其闭合成环状结构
  head.left = pre;
  pre.right = head;
  return head;

  function inorder(node) {
    if (!node) return;
    // 遍历左子树
    inorder(node.left);

    // 处理当前节点
    if (!pre) {
      // 遍历到最左边节点，此时节点就是双向链表的head
      head = node;
    } else {
      pre.right = node;
    }
    node.left = pre;
    pre = node;

    // 遍历右子树
    inorder(node.right);
  }
};
