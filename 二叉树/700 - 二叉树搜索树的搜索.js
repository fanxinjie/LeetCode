// 给定二叉搜索树（BST）的根节点和一个值。 你需要在BST中找到节点值等于给定值的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 NULL。

// 例如，

// 给定二叉搜索树:

//         4
//        / \
//       2   7
//      / \
//     1   3

// 和值: 2
// 你应该返回如下子树:

//       2     
//      / \   
//     1   3
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var searchBST = function (root, val) {
  while (root != null && root.value !== val) {
    root = val < root.val ? root.left : root.right;
  }

  return root;
};
