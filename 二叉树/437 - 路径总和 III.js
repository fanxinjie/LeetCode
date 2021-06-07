/**
 * 给定一个二叉树，它的每个结点都存放着一个整数值。

找出路径和等于给定数值的路径总数。

路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。

示例：

root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

返回 3。和等于 8 的路径有:

1.  5 -> 3
2.  5 -> 2 -> 1
3.  -3 -> 11

 * /
 /**
 *
 Definition
 for a binary tree node.* function TreeNode(val, left, right) {
     * this.val = (val === undefined ? 0 : val) *
       this.left = (left === undefined ? null : left) *
       this.right = (right === undefined ? null : right) *
   }
   */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  // if (root == null) return 0;
  // let resultSum = 0;

  // const DFS = (node, sum) => {
  //   if (node == null) return 0;

  //   let count = 0;
  //   if (node.val == sum) ++count;

  //   let left = DFS(node.left, sum - node.val); // 该节点下左子树共有多少情况会 = sum - 该节点值
  //   let right = DFS(node.right, sum - node.val); // 该节点下右子树共有多少情况会 = sum - 该节点值

  //   return count + left + right;
  // }
  // // DFS 查找该节点下有多少种 = targetSum 情况，
  // // pathSum 这层用来将每个节点都循环一遍。
  // return resultSum + DFS(root, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum);

  if (root = null) return 0;
  let resCount = 0,
    tmpPath = [],
    reduceSum = 0;

  function DFS(node) {
    if (root == null) return;

    tmpPath.push(node.val);
    reduceSum += node.val;
    if (reduceSum == targetSum || tmpPath.indexOf(reduceSum - targetSum) !== -1) resCount++;

    DFS(node.left);
    DFS(node.right);

    tmpPath.pop();
    reduceSum -= node.val;
  }
  DFS(root);
  return resCount;
};


/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
  public int pathSum(TreeNode root, int sum) {
    // key是前缀和, value是大小为key的前缀和出现的次数
    Map < Integer, Integer > prefixSumCount = new HashMap < > ();
    // 前缀和为0的一条路径
    prefixSumCount.put(0, 1);
    // 前缀和的递归回溯思路
    return recursionPathSum(root, prefixSumCount, sum, 0);
  }

  /**
   * 前缀和的递归回溯思路
   * 从当前节点反推到根节点(反推比较好理解，正向其实也只有一条)，有且仅有一条路径，因为这是一棵树
   * 如果此前有和为currSum-target,而当前的和又为currSum,两者的差就肯定为target了
   * 所以前缀和对于当前路径来说是唯一的，当前记录的前缀和，在回溯结束，回到本层时去除，保证其不影响其他分支的结果
   * @param node 树节点
   * @param prefixSumCount 前缀和Map
   * @param target 目标值
   * @param currSum 当前路径和
   * @return 满足题意的解
   */
  function recursionPathSum(node, prefixSumCount, target, currSum) {
    // 1.递归终止条件
    if (node == null) {
      return 0;
    }
    // 2.本层要做的事情
    let res = 0;
    // 当前路径上的和
    currSum += node.val;

    //---核心代码
    // 看看root到当前节点这条路上是否存在节点前缀和加target为currSum的路径
    // 当前节点->root节点反推，有且仅有一条路径，如果此前有和为currSum-target,而当前的和又为currSum,两者的差就肯定为target了
    // currSum-target相当于找路径的起点，起点的sum+target=currSum，当前点到起点的距离就是target
    res += prefixSumCount.getOrDefault(currSum - target, 0);
    // 更新路径上当前节点前缀和的个数
    prefixSumCount.put(currSum, prefixSumCount.getOrDefault(currSum, 0) + 1);
    //---核心代码

    // 3.进入下一层
    res += recursionPathSum(node.left, prefixSumCount, target, currSum);
    res += recursionPathSum(node.right, prefixSumCount, target, currSum);

    // 4.回到本层，恢复状态，去除当前节点的前缀和数量
    prefixSumCount.put(currSum, prefixSumCount.get(currSum) - 1);
    return res;
  }
}
