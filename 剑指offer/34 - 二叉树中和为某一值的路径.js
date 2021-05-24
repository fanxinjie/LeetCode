/**
 * 
 * 输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。
示例:
给定如下二叉树，以及目标和 target = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
返回:

[
   [5,4,11,2],
   [5,8,4,5]
]
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
  let result = [],
    tmpPath = [];

  function DFS(root, sum) {
    if (root == null) return;

    tmpPath.push(root.val);
    sum -= root.val;

    if (sum == 0 && root.left == null && root.right == null) {
      result.push([...tmpPath]);
    }

    DFS(root.left, sum);
    DFS(root.right, sum);
    tmpPath.pop();
  }

  DFS(root, target);

  return result;
};
