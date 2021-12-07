/**
 * 给定一个整数数组 nums， 找到一个具有最大和的连续子数组（ 子数组最少包含一个元素）， 返回其最大和。

 示例 1：

 输入： nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 输出： 6
 解释： 连续子数组[4, -1, 2, 1] 的和最大， 为 6。
 示例 2：

 输入： nums = [1]
 输出： 1
 示例 3：

 输入： nums = [0]
 输出： 0
 示例 4：

 输入： nums = [-1]
 输出： - 1

 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length == 0) return 0;
  let dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] > 0) {
      dp[i] = dp[i - 1] + nums[i];
    } else {
      dp[i] = nums[i];
    }
  }
  return Math.max(...dp);
};

console.log('maxSubArray([-2,1,-3,4,-1,2,1,-5,4])', maxSubArray([1]))
