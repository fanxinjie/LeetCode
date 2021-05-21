// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

// 示例 1：

// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]
// 示例 2：

// 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
/**
 * @description 
 * 思路：
 * 每次进行四个方向取值: 沿着顺时针方向走（ 左 -> 右 - > 下 - > 左 - > 上 ），最外层有left，right， top，bottom值
 * 在每一次进行换方向时， 都需要判断是否需要进行取值， 即如， 左 - > 右 结束，在切换方向前，需要判断 ++top 和 bottom 的值如果相等，即相差0行的情况下，是不需要进行此次取值的行为的
 * 
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length == 0) return [];
  let l = 0,
    r = matrix[0].length - 1,
    t = 0,
    b = matrix.length - 1;
  let res = [];

  while (true) {
    console.log('top,right,bottom,left', t, r, b, l)
    for (let i = l; i <= r; i++) res.push(matrix[t][i]); // left to right.
    if (++t > b) break; // 每一次变换方向时，都需要考虑是否已经越界
    for (let i = t; i <= b; i++) res.push(matrix[i][r]); // top to bottom.
    if (l > --r) break; // 每一次变换方向时，都需要考虑是否已经越界
    for (let i = r; i >= l; i--) res.push(matrix[b][i]); // right to left.
    if (t > --b) break; // 每一次变换方向时，都需要考虑是否已经越界
    for (let i = b; i >= t; i--) res.push(matrix[i][l]); // bottom to top.
    if (++l > r) break; // 每一次变换方向时，都需要考虑是否已经越界
  }
  return res;
};

console.log('spiralOrder', spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]))

console.log('spiralOrder( [[1,2,3,4],[5,6,7,8],[9,10,11,12]])', spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]))
