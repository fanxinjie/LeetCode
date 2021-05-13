// 输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)
// B是A的子结构， 即 A中有出现和B相同的结构和节点值。
// 例如:
// 给定的树 A:

//      3
//     / \
//    4   5
//   / \
//  1   2
// 给定的树 B：
//    4 
//   /
//  1
// 返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

// 示例 1：

// 输入：A = [1,2,3], B = [3,1]
// 输出：false
// 示例 2：

// 输入：A = [3,4,5,1,2], B = [4,1]
// 输出： true
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (A == null || B == null) return false;

  return recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};

// 包含：以A为根的数是否包含B（必须从A开始）
function recur(A, B) {
  // 在对比 a 和 b 时候 b 如果为空，则 true
  if (B == null) return true;

  // 如果两值不同 或 a 为空 b 存在，则 false
  if (A == null || A.val != B.val) return false;

  // 深度遍历 判断 左 右 子树
  return recur(A.left, B.left) && recur(A.right, B.right);
}
