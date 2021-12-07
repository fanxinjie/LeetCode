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
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root == null || root == p || root == q) {
    return root;
  }

  // 递归查找出左子树中 p 或 q
  let left = lowestCommonAncestor(root.left, p, q);
  // 递归查找出左子树中 p 或 q
  let right = lowestCommonAncestor(root.right, p, q);

  // 如果左右都不为空，则说明 p, q 刚好分布在左右子树中
  if (left != null && right != null) {
    return root;
  }
  // 如果左子树不存在，则说明 p, q 和 right 相等
  if (left == null) return right;

  // 否则说明 p, q 和 left 相等
  return left;
};


let lowestCommonAncestor1 = (root, p, q) => {
  if (root == null || root == p || root == q) {
    return root;
  }

  let left = lowestCommonAncestor1(root.left, p, q);
  let right = lowestCommonAncestor1(root.right, p, q);

  if (left == null && right == null) return null;

  if (left == null) return right;

  if (right == null) return left;

  return root;
}
