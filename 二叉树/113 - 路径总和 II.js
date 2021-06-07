/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum， 找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
 * 叶子节点 是指没有子节点的节点。
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  let result = [],
    tmpPath = [];

  function DFS(root, sum) {
    if (root == null) return;

    tmpPath.push(root.val);
    sum -= root.val;
    if (sum == 0 && root.left == null && root.right == null) {
      // 如果当前节点为叶子节点，且路径和为 targetSum，需要将 tmpPath 放入最后 result
      result.push([...tmpPath]);
    }

    DFS(root.left, sum);
    DFS(root.right, sum);
    tmpPath.pop();
  }
  DFS(root, targetSum);
  return result;
};
