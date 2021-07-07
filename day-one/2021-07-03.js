// 451. 根据字符出现频率排序
// 给定一个字符串，请将字符串里的字符按照出现的频率降序排列。

// 示例 1:
// 输入: "tree"
// 输出: "eert"
// 解释:
// 'e'出现两次，'r'和't'都只出现一次。
// 因此'e'必须出现在'r'和't'之前。此外，"eetr"也是一个有效的答案。

// 示例 2:
// 输入: "cccaaa"
// 输出: "cccaaa"
// 解释:
// 'c'和'a'都出现三次。此外，"aaaccc"也是有效的答案。
// 注意"cacaca"是不正确的，因为相同的字母必须放在一起。

// 示例 3:
// 输入: "Aabb"
// 输出: "bbAa"
// 解释:
// 此外，"bbaA"也是一个有效的答案，但"Aabb"是不正确的。
// 注意'A'和'a'被认为是两种不同的字符。

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  // 第一次循环s的长度，然后转化为{'a':3},这种 obj，然后根据obj的数字排序，然后拼接出最后的结果
  let tmpObj = {};
  for (let i = 0; i < s.length; i++) {
    const ele = s[i];
    if (tmpObj[ele]) {
      tmpObj[ele] += 1;
    } else {
      tmpObj[ele] = 1;
    }
  }
  let tmpArr = Object.entries(tmpObj);
  tmpArr.sort((a, b) => b[1] - a[1]);
  let result = '';
  for (let i = 0; i < tmpArr.length; i++) {
    const ele = tmpArr[i];
    while (ele[1] > 0) {
      result += ele[0];
      ele[1]--;
    }
  }
  return result;
};

console.log('frequencySort', frequencySort('tree'))
console.log('frequencySort', frequencySort('cccaaa'))
console.log('frequencySort', frequencySort('Aabb'))
