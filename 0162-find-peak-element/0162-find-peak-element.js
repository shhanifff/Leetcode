/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let a = Math.max(...nums)
    return nums.indexOf(a)
};