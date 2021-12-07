/**
 * @description
给定不同面额的硬币 coins 和一个总金额 amount。 编写一个函数来计算可以凑成总金额所需的最少的硬币个数。 如果没有任何一种硬币组合能组成总金额， 返回 - 1。
你可以认为每种硬币的数量是无限的。
// 示例 1：
// 输入：coins = [1, 2, 5], amount = 11
// 输出：3 
// 解释：11 = 5 + 5 + 1

// 示例 2：
// 输入：coins = [2], amount = 3
// 输出：-1

// 示例 3：
// 输入：coins = [1], amount = 0
// 输出：0

// 示例 4：
// 输入：coins = [1], amount = 1
// 输出：1

// 示例 5：
// 输入：coins = [1], amount = 2
// 输出：2

 * 
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      const ele = coins[j];
      if (ele <= i) {
        dp[i] = Math.min(dp[i], 1 + dp[i - ele]);
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
};

console.log('coinChange', coinChange([1, 2, 5], 11))


function minCoinChange(coins) {
  let cache = {};
  this.makeChange = (amount) => {
    if (!amount) return [];
    if (cache[amount]) return cache[amount];
    let min = [],
      newMin, newAmount;

    for (let i = 0; i < coins.length; i++) {
      const ele = coins[i];
      newAmount = amount - ele;

      if (newAmount >= 0) {
        newMin = this.makeChange(newAmount);
      }

      if (newAmount >= 0 && (newMin.length < min.length - 1 || !min.length) && (newMin.length || !newAmount)) {
        min = [ele].concat(newMin);
        console.log(`new min ${min} for ${amount}`);
      }
    }
    return cache[amount] = min;
  }
}
