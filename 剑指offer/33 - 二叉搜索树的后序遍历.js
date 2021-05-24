/**
 * @param {number[]} postorder
 * @return {boolean}
 */
//  输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。

// 参考以下这颗二叉搜索树：

//      5
//     / \
//    2   6
//   / \
//  1   3
// 示例 1：

// 输入: [1,6,3,2,5]
// 输出: false
// 示例 2：

// 输入: [1,3,2,6,5]
// 输出: true


/**
 * @param {*} postorder 
 */

var verifyPostorder = function (postorder) {
  function recur(arr, left, right) {
    if (left >= right) return true;
    let p = left;
    while (arr[p] < arr[right]) p++;
    let mid = p;
    while (arr[p] > arr[right]) p++;

    // 如果 p !== right,则说明其中不符合 左节点小于根结点，右节点大雨根结点规则
    return p == right && recur(arr, left, mid - 1) && recur(arr, mid, right - 1);
  }
  recur(postorder, 0, postorder.length - 1);
};
