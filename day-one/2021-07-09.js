/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // let obj = {};
  // for (let i = 0; i < nums.length; i++) {
  //   const ele = nums[i];
  //   obj[ele] = (obj[ele] || 0) + 1;
  // }

  // for (const key in obj) {
  //   if (obj[key] > nums.length / 2) return +key;
  // }
  // return -1;

  let n = nums.length;
  let x = -1,
    cnt = 0;
  for (const i of nums) {
    if (cnt == 0) {
      x = i;
      cnt = 1;
    } else {
      cnt += x == i ? 1 : -1;
    }
  }
  cnt = 0;
  for (const i of nums) {
    if (x == i) cnt++;
  }

  return cnt > n / 2 ? x : -1;
};


console.log('majorityElement', majorityElement([2, 2, 1, 1, 1, 2, 2]))
console.log('majorityElement', majorityElement([3, 5, 5, 5, 5, 2, 2, 5]))
console.log('majorityElement', majorityElement([2, 3]))
