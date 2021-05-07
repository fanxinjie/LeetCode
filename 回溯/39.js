/**
 * @description给定一个无重复元素的数组 candidates 和一个目标数 target， 找出 candidates 中所有可以使数字和为 target 的组合。

 candidates 中的数字可以无限制重复被选取。

 说明：

 所有数字（ 包括 target） 都是正整数。
 解集不能包含重复的组合。

 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];

  function DFS(nums, begin, len, target, path, res) {
    if (target < 0) {
      return;
    }
    if (target == 0) {
      res.push([...path]);
      return;
    }

    for (let i = begin; i < len; i++) {
      path.push(nums[i]);
      DFS(nums, i, len, target - nums[i], path, res);
      path.pop();
    }
  }
  DFS(candidates, 0, candidates.length, target, [], res);
  return res;
};

console.log('combinationSum', combinationSum([2, 3, 7], 7))
