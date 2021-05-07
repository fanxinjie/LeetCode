/**
 * 求树的高度
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * 深度优先，后续遍历
 * 
 * 最大深度为，左子树/右子树中最大值 + 1
 * 
 * 计算左子深度，计算右子深度
 */

var maxDepth = function (root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
