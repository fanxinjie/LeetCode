// 统计一个数字在排序数组中出现的次数。

// 示例 1:
// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: 2

// 示例 2:
// 输入: nums = [5,7,7,8,8,10], target = 6
// 输出: 0
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let tmp = {};
  for (let i = 0; i < nums.length; i++) {
    const ele = nums[i];
    tmp[ele] = tmp[ele] ? tmp[ele] + 1 : 1;
  }
  return tmp[target] || 0;
};



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 题意：已经排好序 查找 那么就是二分法]=6m[    K{AAAAAAAAAAAAAAaaaaaa}]
var search = function (nums, target) {
  function BinaySearch(nums, left, right) {
    if (left > right) {
      return -1 // 找不到
    }
    let mid = Math.floor((left + right) / 2)
    if (target < nums[mid]) {
      // 在左侧
      return BinaySearch(nums, left, mid - 1)
    } else if (target > nums[mid]) {
      // 在右侧
      return BinaySearch(nums, mid + 1, right)
    } else {
      // 找到了
      return mid
    }
  }
  let count = 0;
  let targetIdx = BinaySearch(nums, 0, nums.length - 1)
  if (targetIdx !== -1) {
    count++
  } else {
    return count
  }
  // 找它左边和右边就行
  let leftIdx = targetIdx - 1
  while (nums[leftIdx] === nums[targetIdx]) {
    count++
    leftIdx--
  }
  let rightIdx = targetIdx + 1
  while (nums[rightIdx] === nums[targetIdx]) {
    count++
    rightIdx++
  }
  return count
};
