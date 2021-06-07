/**
 * 
给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

示例：
二叉树：[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层序遍历结果：

[
  [3],
  [9,20],
  [15,7]
]

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  let queue = [
      [root, 0]
    ],
    res = [];
  while (queue.length) {
    let [node, level] = queue.shift();

    if (!res[level]) res[level] = [];
    res[level].push(node.val);

    node.left && queue.push([node.left, level + 1]);
    node.right && queue.push([node.right, level + 1]);
  }
  return res;
};
