/**
 * 二叉树前序遍历：可以进行递归遍历，也可进行 wihle 循环
 * 
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

let preorderTraversal1 = function (root) {
  let res = [];

  function coun(node) {
    if (!node) return;
    res.push(node.val);
    coun(node.left);
    coun(node.right);
  }
  coun(root);
  return res;
}

var preorderTraversal = function (root) {
  let stack = [],
    res = [];
  if (root) stack.push(root);

  while (stack.length) {
    let node = stack.pop();
    if (node) {
      res.push(node.val);
      stack.push(node.right);
      stack.push(node.left);
    }
  }
  return res;
};
