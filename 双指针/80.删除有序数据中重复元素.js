/**
 * 给你一个有序数组 nums， 请你 原地 删除重复出现的元素， 使每个元素 只出现一次， 返回删除后数组的新长度。 
 * 不要使用额外的数组空间， 你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 * 
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (!nums.length) return 0;
    let tmp = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[tmp] !== nums[i]) {
            tmp++;
            nums[tmp] = nums[i];
        }
    }
    return tmp + 1;
};


/**
 * 给你一个有序数组 nums， 请你 原地 删除重复出现的元素， 使每个元素 最多出现两次， 返回删除后数组的新长度。
 * 不要使用额外的数组空间， 你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 * 
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length <= 2) return nums.length;
    let tmp = 1,
        maxrepeat = 2;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[tmp - maxrepeat + 1]) {
            tmp++;
            nums[tmp] = nums[i];
        }
    }
    return tmp + 1;
};
