// 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
// 一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。
// 例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

// 示例 1：

// 输入：m = 2, n = 3, k = 1
// 输出：3
// 示例 2：

// 输入：m = 3, n = 1, k = 0
// 输出：1

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  let res = 0,
    first = true;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let tmp = Math.floor(i / 10 + i % 10) + Math.floor(j / 10 + j % 10);
      if (tmp <= k) {
        res++;
      } else if (first && m <= n) {
        first = false;
        m = j;
      }
    }
  }
  return res;
};

console.log('movingCount', movingCount(14, 14, 5)) // 21
