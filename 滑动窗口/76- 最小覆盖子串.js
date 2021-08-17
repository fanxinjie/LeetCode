// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

// 注意：
// 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
// 如果 s 中存在这样的子串，我们保证它是唯一的答案。

// 示例 1：
// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC"

// 示例 2：
// 输入：s = "a", t = "a"
// 输出："a"

// 示例 3:
// 输入: s = "a", t = "aa"
// 输出: ""
// 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
// 因此没有符合条件的子字符串，返回空字符串。
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let map = {};
  for (let i = 0; i < t.length; i++) {
    const ele = t[i];
    map[ele] = (map[ele] || 0) + 1;
  }
  let left = 0,
    right = 0,
    count = t.length,
    max = Number.MAX_SAFE_INTEGER,
    minSubstr = s;
  while (right < s.length) {
    if (map[s[right]] > 0) {
      count--;
    }
    map[s[right]]--;
    right++;

    while (count == 0) {
      if (right - left < max) {
        max = right - left;
        minSubstr = s.slice(left, right);
      }
      map[s[left]]++;
      if (map[s[left]] > 0) {
        count++;
      }
      left++;
    }
  }
  return max == Number.MAX_SAFE_INTEGER ? '' : minSubstr;
}
console.log('minWindow', minWindow("ADOBECODEBANC", "ABC"))
console.log('minWindow', minWindow("a", "aa"))
