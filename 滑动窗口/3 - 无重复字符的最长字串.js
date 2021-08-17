/**
 * @param {string} s
 * @return {number}
 * 
 * 思路：以下是两种思路
 * 
 * 1. 依次遍历左端点，相当于固定左侧字母，map 中是否存在右端点，在除首次，需要删除 map 中 left 值
 *    1. 如果不存在，直接存储 map，且 right++，内部循环直到 map 中有 right 值，之后计算 len
 *    2. 如果存在，直接计算 len
 * 
 * 2. 依次遍历右端点
 *    1. 右端点不存在，直接存储map，且 right++
 *    2. 右端点存在, 左端点在小于 right 的情况下，查找右端点从左侧最近的位置，找到后，计算 len
 */
var lengthOfLongestSubstring = function (s) {
  let hashMap = new Map();
  const len = s.length;
  let right = -1,
    res = 0;

  // 固定左端点，右边界向右变动
  for (let left = 0; left < len; left++) {
    if (left != 0) {
      hashMap.delete(s[left - 1]);
    }
    while (right + 1 < len && !hashMap.has(s.charAt(right + 1))) {
      hashMap.set(s.charAt(right + 1), 1);
      ++right;
    }

    res = Math.max(res, right - left + 1);
  }

  // // 固定右侧，左侧查看最长字串
  // let left = 0;
  // right = 0;
  // while (right < len) {
  //   if (!hashMap.has(s[right])) {
  //     hashMap.set(s[right], 1);
  //     right++;
  //   } else {
  //     while (left < right) {
  //       hashMap.delete(s[left]);
  //       if (s[left++] == s[right]) {
  //         break;
  //       }
  //     }
  //   }
  //   res = Math.max(res, right - left);
  // }

  return res;
};

console.log('lengthOfLongestSubstring()', lengthOfLongestSubstring('abcdabcbb'))
