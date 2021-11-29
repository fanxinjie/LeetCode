# 二叉树

## 分类

- 平衡二叉树：左右子树的高度差不超过 1。
- 二叉搜索树：左子节点 小于 根节点，根节点 小于 右子节点。
- 满二叉树：
- 完全二叉树

## 遍历方法

- 前序遍历：跟节点 -> 左子节点 -> 右子节点
- 中序遍历：左子节点 -> 跟节点 -> 右子节点
- 后序遍历：左子节点 -> 右子节点 -> 跟节点
- 广度优先：BFS, 需要有一个外部因素借助
- 深度优先：DFS，直接遍历，然后回退，类似 DFS + 回溯

### 递归版 前中后遍历汇总

```javascript
// 前序遍历
function preOrder(root) {
  if (!root) return null;

  console.log('root.val', root.val);
  preOrder(root.left);
  preOrder(root.right);
}

// 中序遍历 递归版
function inorder(root) {
  if (!root) return null;

  inorder(root.left);
  console.log('root.val', root.val);
  inorder(root.right);
}

// 后序遍历 递归版
function postOrder(root) {
  if (!root) return null;

  postOrder(root.left);
  postOrder(root.right);
  console.log('root.val', root.val);
}
```

### 非递归版 前中后遍历汇总

```javascript
// 前序遍历 非递归版
function preOrder(root) {
  let stack = [],
    res = [];
  if (root) stack.push(root);
  while (stack.length) {
    while (root) {
      res.push(root.val);
      stack.push(root);
      root = root.left;
    }
    let node = stack.pop();
    root = node.right;
  }
  return res;
}

// 中序遍历 非递归版
function inorder(root) {
  let stack = [],
    res = [];
  if (root) stack.push(root);
  while (root || stack.length) {
    // 先把当前节点的左节点入栈，及root.left，root.left.left，......
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    res.push(root.val);
    root = root.right;
  }
}

// 后序遍历 非递归版
function postOrder(root) {
  let stack = [],
    res = [];
  if (root) stack.push(root);

  while (stack.length) {
    while (root) {
      res.unshift(root.val);
      stack.push(root);
      root = root.right;
    }
    let node = stack.pop();
    root = node.left;
  }
  return res;
}
```

### DFS、BFS

```javascript
// 深度优先 递归版
function DFS(root) {
  if (!root) return null;
  DFS(root.left);
  DFS(root.right);
}

// 广度优先，非递归版，需要借助工具，也就是 [[node, level], [node.left, level + 1], [node.right, level + 1]]
var levelOrder = function (root) {
  if (!root) return [];

  let queue = [root], // 初始化 第一层级为 root 跟节点，level 为0
    res = [];

  // queue 用来存放树的层级节点
  while (queue.length) {
    // 将最前面一个弹出，保持 queue 队列的头部为最新需要的数据
    let node = queue.shift();

    // 如果没有这一层级的值，则初始化[]
    res.push(node.val);

    // 将左右两个子节点数据插入队尾
    node.left && queue.push([node.left]);
    node.right && queue.push([node.right]);
  }
  return res;
};
```

## 例题练习

### 前序遍历

### 中序遍历

- [94-二叉树的中序遍历]()

### 后序遍历

- 98 验证二叉搜索树
- 104 二叉树最大深度
- 110 平衡二叉树
- 111 二叉树最小深度
- 222 完全二叉树的节点个数
- 894 所有可能的满二叉树

### 广度优先

> 广度优先，需要借助工具，也就是 [[node, level], [node.left, level + 1], [node.right, level + 1]]

- [102-二叉树的层序遍历]()

### 深度优先

- [113-路径总和II]()
