var isSameTree = function (p, q) {
    if (!q && !p) return true;
    if (!q || !p) return false;
    return p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
