// 给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。

// 示例 1:
// 输入: 2
// 输出: 1
// 解释: 2 = 1 + 1, 1 × 1 = 1。

// 示例 2:
// 输入: 10
// 输出: 36
// 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。

// 说明: 你可以假设 n 不小于 2 且不大于 58。

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      // 状态转移方程：至少两个整数的合，两个数为：j * (i-j)， 三个及其以上，就和前一个数值有关系了，dp[i-j]，即dp[i-j]*k
      // 接下来比较两者较大的数值即可。
      dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i - j]));
    }
  }
  return dp[n];
};

console.log('object', integerBreak(10))
