// 给定一个含有 n 个正整数的数组和一个正整数 target 。
// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

// 示例 1：
// 输入：target = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。

// 示例 2：
// 输入：target = 4, nums = [1,4,4]
// 输出：1

// 示例 3：
// 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
// 输出：0

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 * 
 * 思路：使用滑动窗口，依次遍历右侧端点，在这中间
 */
var minSubArrayLen = function (target, nums) {
  let sum = 0,
    left = 0,
    right = 0,
    len = nums.length;

  let minLen = len + 1;
  while (right < len) {
    sum += nums[right];
    right++;

    // 如果满足条件，需要记录当前长度，以及丢弃最左侧值
    while (sum >= target) {
      minLen = Math.min(minLen, right - left);
      sum -= nums[left];
      left++;
    }

  }
  if (minLen > len) return 0;

  return minLen;
}
