/**
 * @param {number} n
 * @return {number}
 */
// 1. 递归写法
var fib = function (n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

// 2. DP动态规划写法
function fib1(n) {
  if (n < 2) return n;

  let dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i < n + 1; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;;
  }
  return dp[n];
}

console.log('fib1(n)', fib1(7))
