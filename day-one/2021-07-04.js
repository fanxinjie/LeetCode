// 集合 s 包含从 1 到 n 的整数。不幸的是，因为数据错误，导致集合里面某一个数字复制了成了集合里面的另外一个数字的值，导致集合 丢失了一个数字 并且 有一个数字重复 。
// 给定一个数组 nums 代表了集合 S 发生错误后的结果。
// 请你找出重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。

// 示例 1：
// 输入：nums = [1,2,2,4]
// 输出：[2,3]

// 示例 2：
// 输入：nums = [1,1]
// 输出：[1,2]

// ln, total = len(nums), sum(set(nums))
// return [sum(nums) - total, (1 + ln) * ln // 2 - total]


// // 纯数学解题：

// sum(nums) - sum(set(nums)) = 重复的数字

// (1 + len(nums)) * len(nums) // 2 - sum(set(nums)) = 丢失的数字

/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * 排序过后才知道丢失的数字是谁，究竟是前一位还是后一位
 */
var findErrorNums = function (nums) {
  const usedMap = new Map();
  let goldSum = 0,
    totalSum = 0,
    repeatNum;
  for (let i = 0; i < nums.length; i++) {
    if (usedMap.get(nums[i])) {
      repeatNum = nums[i];
    }
    usedMap.set(nums[i], true);
    goldSum += i + 1;
    totalSum += nums[i];
  }
  return [repeatNum, goldSum - (totalSum - repeatNum)];
};
