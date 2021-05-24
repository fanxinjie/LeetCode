// 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

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
//   [9,20],
//   [15,7]
// ]

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
var levelOrder2 = function (root) {
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
