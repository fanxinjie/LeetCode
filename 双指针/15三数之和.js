/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // let result = [];
    // nums = nums.sort((a, b) => a - b);
    // let i = 0,
    //     j = nums.length - 1;
    // while (j - i >= 3) {
    //     let _sum = nums[i] + nums[j];
    //     if (_sum == 0 && nums.indexOf(0) !== -1) {
    //         result.push([nums[i], 0, nums[j]])
    //     } else if (nums.lastIndexOf(0 - _sum) !== -1 && nums.lastIndexOf(0 - _sum) !== j && nums.lastIndexOf(0 - _sum) !== i) {
    //         result.push([nums[i], 0 - _sum, nums[j]]);
    //     }

    //     if (Math.abs(nums[i]) > Math.abs(nums[j])) {
    //         i++;
    //     } else {
    //         j--;
    //     }
    // }
    // return result;
    let resultobj = {};
    let resultArr = [];
    nums = nums.sort((a,b)=>a-b);
    for (let i = 0; i < nums.length; i++) {
        const ele = nums[i];
        let x = i + 1,
            y = nums.length - 1;
        if(ele == nums[i-1]){
            x = y;
        }
        while(x < y) {
            let _sum = ele + nums[x] + nums[y];
            if(_sum == 0) {
                let _tmpArr = [ele, nums[x], nums[y]]
                if (!resultobj[_tmpArr.join(',')]) {
                    resultArr.push([ele, nums[x], nums[y]]);
                    resultobj[_tmpArr.join(',')] = 1
                }
                x++;
            }else if(_sum > 0){
                y--;
            }else if(_sum < 0){
                x++;
            }
        }
    }
    return resultArr;
};

console.log('threeSum()', threeSum([0]))
