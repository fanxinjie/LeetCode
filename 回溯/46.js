// 给定一个 没有重复 数字的序列， 返回其所有可能的全排列。

// 示例:

//   输入: [1, 2, 3]
// 输出: [
//   [1, 2, 3],
//   [1, 3, 2],
//   [2, 1, 3],
//   [2, 3, 1],
//   [3, 1, 2],
//   [3, 2, 1]
// ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  // 全排列问题，回溯入门
  let res = [];
  let used = {};

  function DFS(path) {
    // 停止递归条件
    if (path.length == nums.length) {
      res.push(path.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      const ele = nums[i];
      if (!used[ele]) {
        path.push(ele);
        used[ele] = true;
        DFS(path);
        path.pop();
        used[ele] = false;
      }
    }
  }
  DFS([]);
  return res;
}
console.log('per', permute([1, 2, 3]))
