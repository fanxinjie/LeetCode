// 城市的天际线是从远处观看该城市中所有建筑物形成的轮廓的外部轮廓。给你所有建筑物的位置和高度，请返回由这些建筑物形成的 天际线 。

// 每个建筑物的几何信息由数组 buildings 表示，其中三元组 buildings[i] = [lefti, righti, heighti] 表示：

// lefti 是第 i 座建筑物左边缘的 x 坐标。
// righti 是第 i 座建筑物右边缘的 x 坐标。
// heighti 是第 i 座建筑物的高度。
// 天际线 应该表示为由 “关键点” 组成的列表，格式 [[x1,y1],[x2,y2],...] ，并按 x 坐标 进行 排序 。关键点是水平线段的左端点。列表中最后一个点是最右侧建筑物的终点，y 坐标始终为 0 ，仅用于标记天际线的终点。此外，任何两个相邻建筑物之间的地面都应被视为天际线轮廓的一部分。

// 注意：输出天际线中不得有连续的相同高度的水平线。例如 [...[2 3], [4 5], [7 5], [11 5], [12 7]...] 是不正确的答案；三条高度为 5 的线应该在最终输出中合并为一个：[...[2 3], [4 5], [12 7], ...]

// 示例1：
// 输入：buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]
// 输出：[[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]
// 解释：
// 图 A 显示输入的所有建筑物的位置和高度，
// 图 B 显示由这些建筑物形成的天际线。图 B 中的红点表示输出列表中的关键点。


/**
 * 使用扫描线，从左至右扫过。如果遇到左端点，将高度入堆，如果遇到右端点，则将高度从堆中删除。使用 last 变量记录上一个转折点。

 */
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
  if (!buildings || !buildings.length) return buildings;

  // 采用扫描法
  let e = buildings[0];
  let lefti = e[0],
    righti = e[1],
    heighti = e[2],
    res = [
      [lefti, heighti]
    ];

  for (let i = 1; i < buildings.length; i++) {
    const build = buildings[i];




    // 如果该 build 的左侧在上一个右侧之后
    if (build[0] > righti) {
      res.push(...[
        [righti, 0],
        [build[0], build[2]]
      ]);
      lefti = build[0];
      righti = build[1];
      heighti = build[2];
    } else if (build[0] < righti && build[2] > heighti) {
      res.push([build[0], build[2]]);
      lefti = build[0];
      righti = Math.max(build[1], righti)
      heighti = build[2];
    }

    console.log('build', build)
    console.log('build-------------', lefti, righti, heighti)

    // if (build[0] < lefti) {
    //   res.push([Math.max(build[0], lefti), Math.max(build[2], heighti)]);
    //   lefti = Math.max(build[0], lefti)
    //   righti = Math.max(build[1], righti)
    //   heighti = Math.max(build[2], heighti)
    // } else if (build[0] > lefti) {
    //   res.push(...[
    //     [righti, 0],
    //     [build[0], build[2]]
    //   ]);
    //   lefti = build[0];
    //   righti = build[1];
    //   heighti = build[2];
    // }
  }

  console.log('res', res)







  // 很巧妙的做法，利用了 muliset 这一数据结构自动排序的特性。

  // multiset中的元素是 pair，对pair排序默认的方式是，先比较 first，哪个小则排在前；first 相等则 second小的排在前。 而 first 这里表示横坐标，second 为负时，表示建筑的左侧在这一位置，其绝对值表示建筑在的高度；second 为正时，表示建筑的右侧在这一位置。

  // 所以对muliset遍历时，首先会取出横坐标小的点。如果2个点横坐标相等，会先取出 second 小的点，对于负数来说，其实就是高度更高的建筑。也就是说，两个点上有高度不同的建筑，会先取高的出来放入高度集合，集合中高度最大值和之前高度不同，就直接放入结果。后面更低高度的建筑加入并不会改变最大高度。

  // 如果second为正，表示建筑物在此处结束，需要把相应高度从高度集合中删除。有相同建筑同时在此结束，则会先让较低的建筑离开，因为它们不会改变最大高度。只有当最高的建筑物离开时，才进行改变。

  // 如果一个位置既有建筑物进来，又有建筑物离开，会先选择进来的，同理。 总结起来，我就是想说，这里把建筑物起始点的高度设为负数，真的很巧妙。


  // let all = [];
  // for (const e of buildings) {
  //   all.insert(make_pair(e[0], -e[2])); // critical point, left corner
  //   all.insert(make_pair(e[1], e[2])); // critical point, right corner
  // }
  // multiset<pair<int, int>> all;
  // vector < vector < int >> res;
  // for (auto& e : buildings) {
  //     all.insert(make_pair(e[0], -e[2])); // critical point, left corner
  //     all.insert(make_pair(e[1], e[2])); // critical point, right corner
  // }

  // multiset<int> heights({0}); // 保存当前位置所有高度。
  // vector<int> last = {0, 0}; // 保存上一个位置的横坐标以及高度
  // for (auto& p : all) {
  //     if (p.second < 0) heights.insert(-p.second); // 左端点，高度入堆
  //     else heights.erase(heights.find(p.second)); // 右端点，移除高度

  //     // 当前关键点，最大高度
  //     auto maxHeight = *heights.rbegin();

  //     // 当前最大高度如果不同于上一个高度，说明这是一个转折点
  //     if (last[1] != maxHeight) {
  //         // 更新 last，并加入结果集
  //         last[0] = p.first;
  //         last[1] = maxHeight;
  //         res.push_back(last);
  //     }
  // }
  // return res;

};

console.log('object', getSkyline([
  [2, 9, 10],
  [3, 7, 15],
  [5, 12, 12],
  [15, 20, 10],
  [19, 24, 8]
]))






const getSkyline1 = (buildings) => {
  let res = [],
    tmpAllArr = [],
    pre = null;
  for (let b of buildings) {
    tmpAllArr.push([b[0], -b[2]]); // 左端点
    tmpAllArr.push([b[1], b[2]]); // 右端点
  }

  tmpAllArr.sort((a, b) => a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]); // 按照横坐标排序，如果相等按照纵坐标排序
  let heights = [0] // 端点最低为0;

  for (let h of tmpAllArr) {
    if (h[1] < 0) {
      //加入左端点
      heights.push(-h[1])
    } else {
      // 删除右端点
      let index = heights.indexOf(h[1]);
      heights.splice(index, 1);
    }
    let maxHeight = Math.max(...heights);
    if (pre !== maxHeight) {
      res.push([h[0], maxHeight]);
      pre = maxHeight;
    }
  }
  return res;
};
