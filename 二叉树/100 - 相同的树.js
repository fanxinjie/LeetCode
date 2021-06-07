var isSameTree = function (p, q) {
  if (!q && !p) return true;
  if (!q || !p) return false;
  return p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};


function BFS(treeNodes) {
  let stack = [];
  for (let i = 0; i < treeNodes.length; i++) {

  }
}

// BFS, 需要有一个外部因素借助
// DFS，直接遍历，然后回退，类似 DFS + 回溯
