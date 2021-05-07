// 请实现一个函数， 把字符串 s 中的每个空格替换成 "%20"。

// 示例 1：

// 输入： s = "We are happy."
// 输出： "We%20are%20happy."

/**
 * @param {string} s
 * @return {string}
 */
// 使用额外的变量
var replaceSpace = function (s) {
  let tmpStr = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] == ' ') {
      tmpStr += '%20';
    } else {
      tmpStr += s[i];
    }
  }
  return tmpStr;
};
