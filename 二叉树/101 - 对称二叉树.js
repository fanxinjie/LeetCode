var isSymmetric = function (root) {
  function checkIsSame(left, right) {
    // 如果左右两个同时为 null，说明是叶子节点。
    if (!left && !right) return true;

    // 如果一个有值，一个为空，则说明肯定，不对称，直接返回false。
    if (!left || !right) return false;

    // 对称的原则是值相同，所以要先确实 val 相等，其次确定当前节点的左右子节点相同。
    return left.val == right.val && checkIsSame(left.left, right.right) && checkIsSame(left.right, right.left);
  }

  return checkIsSame(root, root);
};
