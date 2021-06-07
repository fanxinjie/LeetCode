/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给你一个二叉树的根节点 root， 树中每个节点都存放有一个 0 到 9 之间的数字。
 每条从根节点到叶节点的路径都代表一个数字：

 例如， 从根节点到叶节点的路径 1 - > 2 - > 3 表示数字 123。
 计算从根节点到叶节点生成的 所有数字之和。

 叶节点 是指没有子节点的节点。

 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  let resultArr = [],
    tmpPath = [];

  function DFS(node) {
    if (node == null) return;
    tmpPath.push(node.val);

    if (node.left == null && node.right == null) {

      let num = parseInt(tmpPath.join(''));

      resultArr.push(num);
    }
    DFS(node.left);
    DFS(node.right);
    tmpPath.pop();
  }
  DFS(root);

  return !resultArr.length ? 0 : resultArr.reduce((a, b) => a + b);
};

// 使用字符串
function sumNumbers1(root) {
  let tmp = '',
    result = 0;

  function DFS(root) {
    if (!root) return;
    tmp += root.val;

    if (!root.left && !root.right) {
      result = result + +tmp;
    }

    DFS(root.left);
    DFS(root.right);
    tmp = tmp.substr(0, tmp.length - 1);
  }
  DFS(root);

  return result;
}
