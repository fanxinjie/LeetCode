/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 * 
 * 思路
 * 解题思路
 * 此题采用 排除法 + 双指针， 将指针放在数组两端如果满足题目中条件， 证明 整数 a 比整数 b 更接近 x， 此时需要将右边的指针向左移动一位， 否则左侧指针向右移动一位。
 * 
 * 此题需要注意的边界
 * 
 * 1. 当k和数组长度相同时， 直接返回原数组即可。
 * 2. 当跳出循环的条件不是右边 b - 左边 a， 而是 b + 1 - a == k
 * 3. 最后截取数组元素时候， 所以是[a, b + 1]
 * 
 */
var findClosestElements = function (arr, k, x) {
    if (k == arr.length) {
        return arr;
    }
    let i = 0,
        j = arr.length - 1;
    while (i < j) {
        let _left = Math.abs(arr[i] - x),
            _right = Math.abs(arr[j] - x);
        if ((j - i + 1) == k) {
            return arr.slice(i, j + 1);
        }
        if (_left < _right || (_left == _right && i < j)) {
            j--;
        } else {
            i++;
        }
    }
    return arr.slice(i, j + 1);
};
console.log('findClosestElements', findClosestElements([1, 2, 3, 4, 5], 4, 3))
