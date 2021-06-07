/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * 由于搜索树的特性， 左侧节点一定小于根节点， 右侧节点一定大于根节点， 来只查找左侧或右侧
 * 如果当前节点大于同时要找的两个节点， 则说明当前节点不是最近的公共祖先， 而是其中一个。
 * 如果当前节点不同时大于也不同时小于， 说明是最近的公共祖先
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root == null || root == q || root === p) {
    return root;
  }

  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }

  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  };

  // 如果当前节点不同时大于也不同时小于，说明是最近的公共祖先
  return root;
};
