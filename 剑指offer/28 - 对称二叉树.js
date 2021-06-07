/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const check = (left, right) => {
  if (!left && !right) return true;
  if (!left || !right) return false;
  return left.val == right.val && check(left.left, right.right) && check(left.right, right.left);
}
var isSymmetric = function (root) {
  if (!root) return true;
  return check(root, root);
};
