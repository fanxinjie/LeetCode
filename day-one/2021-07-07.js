// 大餐 是指 恰好包含两道不同餐品 的一餐，其美味程度之和等于 2 的幂。

// 你可以搭配 任意 两道餐品做一顿大餐。

// 给你一个整数数组 deliciousness ，其中 deliciousness[i] 是第 i​​​​​​​​​​​​​​ 道餐品的美味程度，返回你可以用数组中的餐品做出的不同 大餐 的数量。结果需要对 109 + 7 取余。

// 注意，只要餐品下标不同，就可以认为是不同的餐品，即便它们的美味程度相同。

//  

// 示例 1：

// 输入：deliciousness = [1,3,5,7,9]
// 输出：4
// 解释：大餐的美味程度组合为 (1,3) 、(1,7) 、(3,5) 和 (7,9) 。
// 它们各自的美味程度之和分别为 4 、8 、8 和 16 ，都是 2 的幂。
// 示例 2：

// 输入：deliciousness = [1,1,1,3,3,3,7]
// 输出：15 
// 解释：大餐的美味程度组合为 3 种 (1,1) ，9 种 (1,3) ，和 3 种 (1,7) 。

// 提示：数据规模
// 1 <= deliciousness.length <= 105
// 0 <= deliciousness[i] <= 220

/**
 * @param {number[]} deliciousness
 * @return {number}
 * 
 * 暴力解法（超时，因为O(n^2)，而n是10^5，所以最大是 10^10，一般超过10^9或10^8就超时了。）
 */
var countPairs = function (deliciousness) {
  let res = 0;
  for (let i = 0; i < deliciousness.length; i++) {
    for (let j = i + 1; j < deliciousness.length; j++) {
      let count = deliciousness[i] + deliciousness[j];
      // 是否为2的幂
      if (count != 0 && (count & (count - 1)) == 0) {
        res++;
        res %= 1000000007;
      }
    }
  }
  return res;
};


// map + 位运算
var countPairs1 = function (deliciousness) {
  const MOD = 10 ** 9 + 7;
  let ans = 0,
    memo = new Map();

  for (const d of deliciousness) {
    for (let i = 0; i <= 22; i++) {
      const pair = (1 << i) - d;
      if (memo.has(pair)) {
        ans = (ans + memo.get(pair)) % MOD;
      }
    }
    memo.set(d, (memo.get(d) || 0) + 1);
  }
  return ans;
}

console.log('countPairs', countPairs([1, 1, 1, 3, 3, 3, 7]))
