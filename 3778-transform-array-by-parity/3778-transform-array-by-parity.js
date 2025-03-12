/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function (nums) {
    let transformedNums = nums.map((x) => x % 2 == 0 ? 0 : 1)
    return transformedNums.sort((a, b) => a - b)
};