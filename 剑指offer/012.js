// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word。 如果 word 存在于网格中， 返回 true； 否则， 返回 false。
// 单词必须按照字母顺序， 通过相邻的单元格内的字母构成， 其中“ 相邻” 单元格是那些水平相邻或垂直相邻的单元格。 同一个单元格内的字母不允许被重复使用。
// 例如， 在下面的 3× 4 的矩阵中包含单词 "ABCCED"（
// 单词中的字母已标出）。
// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// 输出：true
// 示例 2：
// 输入：board = [["a","b"],["c","d"]], word = "abcd"
// 输出：false




// dfs + 回溯；
// 使用二维布尔数组记录之前的位置是否已经被访问过， 如果已经被访问过的话， 则在 dfs 的过程中， 直接
// return false 即可。 也就是说， 此路已经不通了；
// 如果当前遍历到的字符不等于 board[i][j] 位置上的字符， 那么说明此路也是不通的， 因此返回 false；
// 至于递归结束的条件： 如果指针 start 能够来到 word 的最后一个字符， 那么说明能够在矩阵 board 中找到一条路径， 此时返回 true；
// 在遍历到当前 board[i][j] 的时候， 首先应将该位置的 visited[i][j] 设置为 true， 表明访问过；
// 然后， 递归地去 board[i][j] 的上下左右四个方向去找， 剩下的路径；
// 在 dfs 的过程当中， 如果某条路已经不通了， 那么那么需要回溯， 也就是将 visited[i][j] 位置的布尔值重新赋值为 fasle；
// 最后， 返回 ans 即可。


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (board == null || board.length == 0 || board[0].length == 0) {
    return false;
  }

  let rowLen = board.length,
    colLen = board[0].length;

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (DFS(board, word, i, j, 0)) return true;
    }
  }

  function DFS(board, word, i, j, k) {
    console.log('board--', board)
    if (i >= rowLen || i < 0 || j >= colLen || j < 0 || board[i][j] !== word[k]) return false;

    if (k == word.length - 1) return true;

    board[i][j] = '\0';

    let res = DFS(board, word, i + 1, j, k + 1) || DFS(board, word, i - 1, j, k + 1) || DFS(board, word, i, j + 1, k + 1) || DFS(board, word, i, j - 1, k + 1);
    board[i][j] = word[k];
    return res;
  }
  return false;
};

console.log('object', exist([
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"]
], "ABCCED"))
// var exist1 = function (board, word) {
//   const h = board.length,
//     w = board[0].length;
//   const directions = [
//     [0, 1],
//     [0, -1],
//     [1, 0],
//     [-1, 0]
//   ];
//   const visited = new Array(h);
//   for (let i = 0; i < visited.length; ++i) {
//     visited[i] = new Array(w).fill(false);
//   }
//   const check = (i, j, s, k) => {
//     if (board[i][j] != s.charAt(k)) {
//       return false;
//     } else if (k == s.length - 1) {
//       return true;
//     }
//     visited[i][j] = true;
//     let result = false;
//     for (const [dx, dy] of directions) {
//       let newi = i + dx,
//         newj = j + dy;
//       if (newi >= 0 && newi < h && newj >= 0 && newj < w) {
//         if (!visited[newi][newj]) {
//           const flag = check(newi, newj, s, k + 1);
//           if (flag) {
//             result = true;
//             break;
//           }
//         }
//       }
//     }
//     visited[i][j] = false;
//     return result;
//   }

//   for (let i = 0; i < h; i++) {
//     for (let j = 0; j < w; j++) {
//       const flag = check(i, j, word, 0);
//       if (flag) {
//         return true;
//       }
//     }
//   }
//   return false;
// };


// let get_skip_frame = (skip, nums) => {
//   let right = 1,
//     res = [],
//     tmp = [nums[0]];

//   while (right < nums.length) {
//     if (nums[right] == (nums[right - 1] + skip)) {
//       tmp.push(nums[right]);
//     } else {
//       if (res.length < tmp.length) res = tmp;
//     }
//     right++;
//   }
//   return res;
// }

// console.log('get_skip_frame(1)', get_skip_frame(1, [1, 2, 3, 1, 2, 3, 4, 1, 3, 5, 7, 9, 1, 4, 7, 10]))
// console.log('get_skip_frame(2)', get_skip_frame(2, [1, 2, 3, 1, 2, 3, 4, 1, 3, 5, 7, 9, 1, 4, 7, 10]))
// console.log('get_skip_frame(3)', get_skip_frame(3, [1, 2, 3, 1, 2, 3, 4, 1, 3, 5, 7, 9, 1, 4, 7, 10]))
