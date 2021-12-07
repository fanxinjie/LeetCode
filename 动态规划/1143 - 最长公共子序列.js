// 给定两个字符串 text1 和 text2， 返回这两个字符串的最长 公共子序列 的长度。 如果不存在 公共子序列， 返回 0。

// 一个字符串的 子序列 是指这样一个新的字符串： 它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（ 也可以不删除任何字符） 后组成的新字符串。

// 示例 1：
// 输入： text1 = "abcde", text2 = "ace"
// 输出： 3
// 解释： 最长公共子序列是 "ace"，
// 它的长度为 3。
// 示例 2：
// 输入： text1 = "abc", text2 = "abc"
// 输出： 3
// 解释： 最长公共子序列是 "abc"，
// 它的长度为 3。
// 示例 3：
// 输入： text1 = "abc", text2 = "def"
// 输出： 0
// 解释： 两个字符串没有公共子序列， 返回 0。
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 * @sulition 状态： dp[i][j] 表示 text1[i] 字串 和 text2[j] 字串 的最长公共子串 的长度。
 */
var longestCommonSubsequence = function (text1, text2) {
  let len1 = text1.length,
    len2 = text2.length;
  const dp = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1).fill(0));

  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (text1[i] == text2[j]) {
        dp[i + 1][j + 1] = dp[i][j] + 1;
      } else {
        dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }
  return dp[len1][len2];
}
console.log('longestCommonSubsequence', longestCommonSubsequence('abcba', 'abcbcba'))
console.log('longestCommonSubsequence', longestCommonSubsequence('abcde', 'ace'))
