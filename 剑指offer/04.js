// 在一个 n * m 的二维数组中， 每一行都按照从左到右递增的顺序排序， 每一列都按照从上到下递增的顺序排序。 请完成一个高效的函数， 输入这样的一个二维数组和一个整数， 判断数组中是否含有该整数。
// 示例:
//   现有矩阵 matrix 如下：
// [
//   [1, 4, 7, 11, 15],
//   [2, 5, 8, 12, 19],
//   [3, 6, 9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// 给定 target = 5， 返回 true。
// 给定 target = 20， 返回 false。

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 暴力法
var findNumberIn2DArray = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    const ele = matrix[i];
    for (let j = 0; j < ele.length; j++) {
      if (matrix[i][j] === target) return true;
    }
  }
  return false;
};

//2. 线性分析，从矩阵的右上角分析，如果等于，则返回true，如果大于目标值，则列-1，如果小于目标值，则行+1
let find1 = (matrix, target) => {
  if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
    return false;
  }

  let n = matrix.length,
    m = matrix[0].length,
    col = m - 1,
    row = 0;

  while (row < n && col >= 0) {
    let ele = matrix[row][col];
    if (ele == target) {
      return true;
    } else if (ele > target) {
      col--;
    } else if (ele < target) {
      row++;
    }
  }
  return false;
}

console.log('find1()', find1([
  [-5]
], -10))
