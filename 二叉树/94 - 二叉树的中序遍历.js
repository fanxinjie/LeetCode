var inorderTraversal = function (root) {
  let res = [];

  function coun(node) {
    if (!node) return;
    coun(node.left);
    res.push(node.val);
    coun(node.right);
  }
  coun(root);
  return res;
};

var inorderTraversal1 = function (root) {
  const stack = [];
  const result = [];

  while (root || stack.length > 0) {
    // 先把当前节点的左节点入栈，及root.left，root.left.left，......
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    result.push(root.val);
    root = root.right;
  }
  return result;
};
