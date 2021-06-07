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
 * @return {number[]}
 */

let postorderTraversal1 = function (root) {
  let res = [];

  function coun(node) {
    if (!node) return;
    coun(node.left);
    coun(node.right);
    res.push(node.val);
  }
  coun(root);
  return res;
}

var postorderTraversal = function (root) {
  let stack = [],
    res = [];
  if (root) stack.push(root);

  while (stack.length > 0) {
    const node = stack.pop();
    if (node) {
      stack.push(node.left, node.right);
      res.unshift(node.val);
    }
  }
  return res;
};
