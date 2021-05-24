/**
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

//  请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

//  

// 例如:
// 给定二叉树: [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：

// [
//   [3],
//   [20,9],
//   [15,7]
// ]

var levelOrder3 = function (root) {
  if (!root) return [];

  let queue = [
      [root, 0]
    ],
    res = [];

  while (queue.length) {
    let [node, level] = queue.shift();

    if (!res[level]) res[level] = [];


    level % 2 ? res[level].unshift(node.val) : res[level].push(node.val)

    node.left && queue.push([node.left, level + 1]);
    node.right && queue.push([node.right, level + 1]);
  }
  return res;
};
