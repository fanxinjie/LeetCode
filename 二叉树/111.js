/**
 * 二叉树最小深度
 * 
 * 如果树是只有左节点或右节点时，更改104那道，就不适用了
 */

var minDepth = function (root) {
    if (!root) return 0;
    if (!root.left) {
        return minDepth(root.right) + 1;
    }
    if (!root.right) {
        return minDepth(root.left) + 1;
    }
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
