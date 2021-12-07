/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (!s.length) return '';

  let len = s.length,
    left = 0,
    right = 0,
    maxLen = 0,
    startIndex = 0;

  for (let i = 0; i < len; i++) {
    let tmpPalindromeLen = 1;
    left = i - 1;
    right = i + 1;

    while (left >= 0 && s[left] == s[i]) {
      tmpPalindromeLen++;
      left--;
    }

    while (right < len && s[right] == s[i]) {
      tmpPalindromeLen++;
      right++;
    }

    while (left >= 0 && right < len && s[left] == s[right]) {
      left--;
      right++;
      tmpPalindromeLen += 2;
    }

    if (tmpPalindromeLen > maxLen) {
      maxLen = tmpPalindromeLen;
      startIndex = left;
    }
  }
  return s.substr(startIndex + 1, maxLen);
};

/**
 * 动态规划：
 * 状态：dp[l][r] 表示字符串从 i 到 j 这段是否为回文
 * 状态转移方程：dp[l][r] 是否为回文，需要判断 dp[l+1][r-1]===true && s[l]===s[r];
 * 其中需要考虑特殊情况：r - l <= 2，下文有解释；
 * @param {*} s 
 */
var longestPalindrome1 = function (s) {
  let len = s.length,
    start = 0,
    maxLen = 1;
  let dp = new Array(len).fill(0).map(() => new Array(len));

  for (let r = 1; r < len; r++) {
    for (let l = 0; l < r; l++) {
      /**
       * r - l <= 2 含义解释：
       *   r - l = 0， 则表示在同一个位置 -> true。
       *   r - l = 1， 则表示在左右相邻,且s[l]=s[r]   - > true。
       *   r - l = 2， 则表示中间间隔一个单词,且s[l]=s[r] - > true。
       */
      if (s[l] == s[r] && (r - l <= 2 || dp[l + 1][r - 1])) {
        dp[l][r] = true;
        if (r - l + 1 > maxLen) {
          maxLen = r - l + 1;
          start = l;
        }
      }
    }
  }
  return s.substr(start, maxLen)
}
console.log('longestPalindrome', longestPalindrome1("babad"))
console.log('longestPalindrome', longestPalindrome1("cbbd"))
console.log('longestPalindrome', longestPalindrome1("a"))
console.log('longestPalindrome', longestPalindrome1("ac"))
