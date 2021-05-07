/**
 * @description 给定一个 n 个元素有序的（ 升序） 整型数组 nums 和一个目标值 target， 写一个函数搜索 nums 中的 target， 如果目标值存在返回下标， 否则返回 - 1。
 * 
 * @param {number[]} nums :[1, 2, 3, 4, 5, 6, 7, 8]
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
console.log('search', search([0, 1, 2, 3, 4, 5, 6, 7, 8], 6))
