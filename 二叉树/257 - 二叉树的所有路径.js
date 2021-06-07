/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
给定一个二叉树，返回所有从根节点到叶子节点的路径。

说明: 叶子节点是指没有子节点的节点。

示例:

输入:

   1
 /   \
2     3
 \
  5

输出: ["1->2->5", "1->3"]

解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let resultArr = [],
    tmpPath = [];

  function DFS(node) {
    if (node == null) return;
    tmpPath.push(node.val);

    // 如果是叶子节点，则将暂时路径存储在最后list中
    if (node.left == null && node.right == null) resultArr.push(tmpPath.join('->'));

    DFS(node.left);
    DFS(node.right);

    // 左右子节点都处理过后，将该根节点从暂时路径中取出
    tmpPath.pop();
  }
  DFS(root);

  return resultArr;
};
