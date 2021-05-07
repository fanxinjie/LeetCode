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
const check = (p, q) => {
    if (!q && !p) return true;
    if (!q || !p) return false;
    return p.val == q.val && check(p.left, q.right) && check(p.right, q.left);
}
var isSymmetric = function (root) {
    return check(root, root);
};
