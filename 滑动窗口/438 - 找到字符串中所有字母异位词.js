// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
// 异位词 指字母相同，但排列不同的字符串。

// 示例 1:
// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。

//  示例 2:
// 输入: s = "abab", p = "ab"
// 输出: [0,1,2]
// 解释:
// 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
// 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
// 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let res = [],
    map = new Array(26).fill(0);
  for (let i = 0; i < p.length; i++) map[p[i].charCodeAt() - 97]++;

  for (let i = 0, j = 0; i < s.length; i++) {
    const ele = s[i].charCodeAt() - 97;
    map[ele]--;
    while (map[ele] < 0) {
      const c = s[j].charCodeAt() - 97;
      j++;
      map[c]++;
    }
    if (i - j + 1 === p.length) res.push(j);
  }
  res.push
  return res;
}

console.log('findAnagrams', findAnagrams('cbaebabacd', 'abc'))
