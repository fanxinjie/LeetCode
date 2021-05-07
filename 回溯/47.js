// 给定一个 有重复 数字的序列， 返回其所有可能的全排列。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = (nums) => {
  const res = [];
  const used = {};
  nums.sort();

  function DFS1(path) {
    if (path.length === nums.length) {
      res.push(path.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (i - 1 >= 0 && nums[i] == nums[i - 1] && !used[i - 1]) { // 去除重复
        continue;
      }
      if (!used[i]) {
        path.push(nums[i]);
        used[i] = true;
        DFS1(path);
        path.pop();
        used[i] = false;
      }
    }
  }

  DFS1([]); // 递归的入口，空path传进去
  return res;
};
console.log('per', permuteUnique([3, 3, 0, 3]))
