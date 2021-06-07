/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 计算给定二叉树的所有左叶子之和。
 * 
 * 示例：
      3 
     / \
    9  20 
       / \
      15 7
 在这个二叉树中， 有两个左叶子， 分别是 9 和 15， 所以返回 24
 */
var sumOfLeftLeaves = function (root) {
    if (!root) return 0;

    if (root.left !== null && root.left.left == null && root.left.right == null) {
        return root.left.val + sumOfLeftLeaves(root.right);
    }
    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};
