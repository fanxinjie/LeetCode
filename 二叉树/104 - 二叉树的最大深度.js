/**
 * 求树的高度
 * 
 * @tag 深度优先、后续遍历
 * 
 * @description 最大深度为，左子树/右子树中最大值 + 1，递归计算左子深度，计算右子深度
 * 
 */
var maxDepth = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
