// 给你一个字符串 s，找到 s 中最长的回文子串。
// 示例 1：
// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。

// 示例 2：
// 输入：s = "cbbd"
// 输出："bb"

// 示例 3：
// 输入：s = "a"
// 输出："a"

// 示例 4：
// 输入：s = "ac"
// 输出："a"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let len = s.length;
  if (len < 2) return s;

  // dp[i][j] 表示 s[i, j] 是否是回文串
  let dp = new Array(len).fill(new Array(len));
  let charArray = s.split('').forEach(e => e.charCodeAt);

  let maxLen = 1,
    begin = 0;

  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }
  for (let j = 1; j < len; j++) {
    for (let i = 0; i < j; i++) {
      if (charArray[i] != charArray[j]) {
        dp[i][j] = false;
      } else {
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }
      // 只要 dp[i][j] == true 成立，就表示子串 s[i..j] 是回文，此时记录回文长度和起始位置
      // 且比上一个长度更长
      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        begin = i;
      }
    }
  }
  return s.substring(begin, begin + maxLen);
};
