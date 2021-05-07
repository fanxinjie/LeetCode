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
 * @return {boolean}
 */
/**
 * 算法流程：
 recur(root) 函数：

 返回值：
 当节点root 左 / 右子树的深度差 ≤ 1 ： 则返回当前子树的深度， 即节点 root 的左 / 右子树的深度最大值 + 1 + 1（ max(left, right) + 1）；
 当节点root 左 / 右子树的深度差 > 2 ： 则返回 - 1， 代表 此子树不是平衡树。
 
 终止条件：
   当 root 为空： 说明越过叶节点， 因此返回高度 0；
   当左（ 右） 子树深度为 - 1： 代表此树的 左（ 右） 子树 不是平衡树， 因此剪枝， 直接返回 - 1；
 
 isBalanced(root) 函数：
 返回值： 若 recur(root) != -1， 则说明此树平衡， 返回 true； 否则返回 false。

 */

var isBalanced = function (root) {
    if (!root) return true;
    return check(root) != -1;
};

const check = (root) => {
    if (!root) return 0;
    let left = check(root.left);
    if (left == -1) return -1;

    let right = check(root.right)
    if (right == -1) return -1;

    return Math.abs(left - right) > 1 ? -1 : Math.max(left, right) + 1;
}
