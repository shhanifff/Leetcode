/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    let less = []
    let great = []
    let eql = []

    for (i = 0; i < nums.length; i++) {
        if (nums[i] === pivot) {
            eql.push(nums[i])
        } else if (nums[i] < pivot) {
            less.push(nums[i])
        } else {
            great.push(nums[i])
        }
    }

    return [...less, ...eql, ...great]
};