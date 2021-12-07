/**
 * 
给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

示例：
二叉树：[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层序遍历结果：

[
  [3],
  [9,20],
  [15,7]
]
 */
// 广度优先，需要借助工具，也就是 [[node, level], [node.left, level + 1], [node.right, level + 1]]
var levelOrder = function (root) {
  if (!root) return [];

  let queue = [
      [root, 0]
    ], // 初始化 第一层级为 root 跟节点，level 为0
    res = [];

  // queue 用来存放树的层级节点
  while (queue.length) {
    // 将最前面一个弹出，保持 queue 队列的头部为最新需要的数据
    let [node, level] = queue.shift();

    // 如果没有这一层级的值，则初始化[]
    if (!res[level]) res[level] = [];
    res[level].push(node.val);

    // 将左右两个子节点数据插入队尾
    node.left && queue.push([node.left, level + 1]);
    node.right && queue.push([node.right, level + 1]);
  }
  return res;
};
